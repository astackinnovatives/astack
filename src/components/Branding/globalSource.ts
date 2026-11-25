/* eslint-disable */
// @ts-nocheck
// Global Source landing page logic, ported from the original component (DCLogic) to a plain controller.

class GSPage {
  constructor(host) {
    this.host = host;
    this.root = host.querySelector('[data-gs-root]');
    this.state = {};
    this.props = { heroAutoplay: true, motion: 1 };
  }

  setState(patch) {
    const ps = Object.assign({}, this.state);
    this.state = Object.assign({}, this.state, patch);
    this.applyState();
    this.componentDidUpdate(this.props, ps);
  }

  // DOM equivalent of the original template bindings
  applyState() {
    const R = this.root; if (!R) return;
    const s = this.st('slide', 0), open = this.st('menuOpen', false);
    R.querySelectorAll('.hero-slide').forEach((el, i) => el.classList.toggle('is-active', i === s));
    const shade = R.querySelector('.hero-shade'); if (shade) shade.classList.toggle('is-strong', s !== 0);
    const ring = R.querySelector('svg.ring');
    if (ring) { const b = this.st('ringFlip', false); ring.classList.toggle('ring-b', b); ring.classList.toggle('ring-a', !b); }
    const bur = R.querySelector('.nav-burger'), dr = R.querySelector('.nav-drawer');
    if (bur) { bur.classList.toggle('is-open', open); bur.setAttribute('aria-expanded', open ? 'true' : 'false'); bur.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
    if (dr) dr.classList.toggle('is-open', open);
  }

  mount() {
    this.componentDidMount();
    const acts = {
      prev: () => this.go(-1, true),
      next: () => this.go(1, true),
      toggleMenu: () => this.setState({ menuOpen: !this.st('menuOpen', false) }),
      closeMenu: () => this.setState({ menuOpen: false })
    };
    this.root.querySelectorAll('[data-act]').forEach((el) => {
      const fn = acts[el.getAttribute('data-act')];
      if (fn) this.on(el, 'click', fn);
    });
  }


  st(k, d) { return this.state && this.state[k] !== undefined ? this.state[k] : d; }

  go(dir, manual) {
    const n = 3;
    const s = (this.st('slide', 0) + dir + n) % n;
    this.setState({ slide: s, ringFlip: !this.st('ringFlip', false) });
    if (manual) this.restartAuto();
  }

  componentDidMount() {
    this._offs = [];
    this._bootT = setTimeout(() => this.boot(), 0);
  }

  componentDidUpdate(pp, ps) {
    const s = this.st('slide', 0);
    if (ps && ps.slide !== undefined && ps.slide !== s) { this.glTo(s); this.swapText(); }
    else if (ps && ps.slide === undefined && s !== 0) { this.glTo(s); this.swapText(); }
    if (pp && this.props && pp.heroAutoplay !== this.props.heroAutoplay) this.restartAuto();
  }

  swapText() {
    const R = this.R;
    if (!R || this.still) return;
    clearTimeout(this._swT1); clearTimeout(this._swT2);
    R.setAttribute('data-clip', '1'); R.setAttribute('data-swap', '1');
    this._swT1 = setTimeout(() => {
      R.setAttribute('data-swapin', '1'); R.removeAttribute('data-swap');
      requestAnimationFrame(() => requestAnimationFrame(() => R.removeAttribute('data-swapin')));
    }, 520);
    this._swT2 = setTimeout(() => R.removeAttribute('data-clip'), 2100);
  }

  componentWillUnmount() {
    clearTimeout(this._swT1); clearTimeout(this._swT2);
    clearTimeout(this._bootT); clearInterval(this._auto); clearTimeout(this._glFailT); clearTimeout(this._introT);
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._io) this._io.disconnect();
    (this._offs || []).forEach((f) => f());
    if (this.G && this.G.gl) { const ext = this.G.gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); }
    this.G = null;
  }

  on(el, ev, fn, opt) { el.addEventListener(ev, fn, opt); this._offs.push(() => el.removeEventListener(ev, fn, opt)); }

  boot() {
    const root = this.root || document.querySelector('[data-gs-root]');
    if (!root || root.getAttribute('data-booted')) return;
    root.setAttribute('data-booted', '1');
    this.R = root;
    const mm = (q) => (window.matchMedia ? window.matchMedia(q).matches : false);
    this.reduce = mm('(prefers-reduced-motion: reduce)');
    this.fine = mm('(hover: hover) and (pointer: fine)');
    // The canvas overview renders the whole page at once; scroll choreography only runs in a real viewport.
    this.overview = window.innerHeight > 2400;
    this.still = this.reduce || this.overview;
    if (!this.still) root.setAttribute('data-motion', '1');

    this.hero = root.querySelector('[data-hero]');
    this.heroCopy = root.querySelector('[data-hero-copy]');
    this.cta = root.querySelector('[data-cta]');
    this.whyItems = Array.prototype.slice.call(root.querySelectorAll('[data-why]'));
    this.why = root.querySelector('#why');
    this.par = Array.prototype.slice.call(root.querySelectorAll('[data-par]')).map((el) => ({ el: el, f: parseFloat(el.getAttribute('data-par')) || 0, cur: 0 }));
    this.spyLinks = Array.prototype.slice.call(root.querySelectorAll('.nav-links [data-spy]'));
    this.spySecs = this.spyLinks.map((a) => root.querySelector('#' + a.getAttribute('data-spy')));
    this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    this.lastY = 0; this.heroVisible = true; this.heroP = 0; this._lastT = 0;
    this.tickers = Array.prototype.slice.call(root.querySelectorAll('[data-ticker]')).map((row) => ({
      row: row, track: row.querySelector('.ticker-track'), dir: parseFloat(row.getAttribute('data-ticker')) || -1, x: 0, v: 1, vt: 1, P: 0
    }));
    this.tickers.forEach((T) => {
      this.on(T.row, 'pointerenter', () => { T.vt = 0.18; }, { passive: true });
      this.on(T.row, 'pointerleave', () => { T.vt = 1; }, { passive: true });
    });
    this.on(window, 'resize', () => { this.tickers.forEach((T) => { T.P = 0; }); }, { passive: true });

    this.setupReveal();
    this.setupPointer();
    if (!this.reduce) this.initGL();
    this._loop = (t) => this.loop(t);
    this._raf = requestAnimationFrame(this._loop);
    this.restartAuto();
    requestAnimationFrame(() => requestAnimationFrame(() => root.setAttribute('data-ready', '1')));
    this._introT = setTimeout(() => root.setAttribute('data-introdone', '1'), this.still ? 0 : 2400);
  }

  setupReveal() {
    const els = this.R.querySelectorAll('[data-reveal]');
    if (this.still || !('IntersectionObserver' in window)) { els.forEach((e) => e.setAttribute('data-in', '1')); return; }
    this._io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.setAttribute('data-in', '1'); this._io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    els.forEach((e) => this._io.observe(e));
  }

  setupPointer() {
    if (this.hero) {
      this.on(this.hero, 'pointermove', (e) => {
        const r = this.hero.getBoundingClientRect();
        this.mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        this.mouse.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      }, { passive: true });
      this.on(this.hero, 'pointerleave', () => { this.mouse.tx = 0; this.mouse.ty = 0; this.mouse.ht = 0; }, { passive: true });
      this.on(this.hero, 'pointerenter', () => { this.mouse.ht = 1; }, { passive: true });
    }
    if (!this.fine || this.reduce) return;
    this.R.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.style.transition = 'translate .7s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s, color .45s, border-color .45s';
      this.on(el, 'pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.translate = (dx * 0.22).toFixed(2) + 'px ' + (dy * 0.32).toFixed(2) + 'px';
      }, { passive: true });
      this.on(el, 'pointerleave', () => { el.style.translate = '0px 0px'; }, { passive: true });
    });
    this.R.querySelectorAll('[data-tilt]').forEach((el) => {
      this.on(el, 'pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        el.style.setProperty('--ry', ((px - 0.5) * 7).toFixed(2) + 'deg');
        el.style.setProperty('--rx', ((0.5 - py) * 5).toFixed(2) + 'deg');
      }, { passive: true });
      this.on(el, 'pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); }, { passive: true });
    });
    // footer spotlight follows the cursor with a soft lag; the photo drifts against it
    // Why: blueprint grid lights up around the cursor
    const whySec = this.R.querySelector('.why'), stage = this.R.querySelector('.why-stage');
    if (whySec && stage) {
      this.on(whySec, 'pointermove', (e) => {
        const r = stage.getBoundingClientRect();
        stage.style.setProperty('--wx', (e.clientX - r.left).toFixed(0) + 'px');
        stage.style.setProperty('--wy', (e.clientY - r.top).toFixed(0) + 'px');
      }, { passive: true });
    }
    const foot = this.R.querySelector('.footer'), fsp = this.R.querySelector('.foot-spot');
    if (foot && fsp) {
      this.fspot = { el: fsp, x: 0, y: 0, tx: 0, ty: 0, w: 1, h: 1, live: false, on: false };
      this.on(foot, 'pointermove', (e) => {
        const r = foot.getBoundingClientRect(), F = this.fspot;
        F.tx = e.clientX - r.left; F.ty = e.clientY - r.top; F.w = r.width; F.h = r.height;
        if (!F.on) { F.x = F.tx; F.y = F.ty; F.on = true; }
        F.live = true;
      }, { passive: true });
      this.on(foot, 'pointerleave', () => { this.fspot.on = false; }, { passive: true });
    }
    const spot = (el) => this.on(el, 'pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left).toFixed(0) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top).toFixed(0) + 'px');
    }, { passive: true });
    this.R.querySelectorAll('[data-spot]').forEach(spot);
    if (this.cta) spot(this.cta);
    // headings drift softly toward the cursor
    this.R.querySelectorAll('.h2').forEach((el) => {
      el.style.transition = 'translate .9s cubic-bezier(.22,1,.36,1)';
      this.on(el, 'pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / Math.max(1, r.width);
        const dy = (e.clientY - (r.top + r.height / 2)) / Math.max(1, r.height);
        el.style.translate = (dx * 14).toFixed(2) + 'px ' + (dy * 6).toFixed(2) + 'px';
      }, { passive: true });
      this.on(el, 'pointerleave', () => { el.style.translate = '0px 0px'; }, { passive: true });
    });
  }

  restartAuto() {
    clearInterval(this._auto);
    if (!this.R) return;
    const on = !this.reduce && !this.overview && (this.props ? this.props.heroAutoplay !== false : true);
    if (on) this.R.setAttribute('data-auto', '1'); else this.R.removeAttribute('data-auto');
    if (!on) return;
    this._auto = setInterval(() => { if (!document.hidden && this.heroVisible) this.go(1, false); }, 7000);
  }

  loop(now) {
    this._raf = requestAnimationFrame(this._loop);
    if (document.hidden || !this.R) { this._lastT = 0; return; }
    const R = this.R, vh = window.innerHeight || 800;
    const y = -R.getBoundingClientRect().top;
    const dt = this._lastT ? Math.min(0.05, Math.max(0, (now - this._lastT) / 1000)) : 0.016;
    this._lastT = now;

    // nav: elevation + hide on scroll down / reveal on scroll up
    if (y > 8) R.setAttribute('data-scrolled', '1'); else R.removeAttribute('data-scrolled');
    const dy = y - this.lastY;
    const open = this.st('menuOpen', false);
    if (!this.still && !open && y > 420 && dy > 6) R.setAttribute('data-navhide', '1');
    else if (dy < -6 || y <= 420 || open) R.removeAttribute('data-navhide');
    this.lastY = y;

    // scroll progress + velocity skew on image cards
    if (!this._prog) this._prog = R.querySelector('.nav-progress');
    const docH = Math.max(1, R.getBoundingClientRect().height - vh);
    if (this._prog) this._prog.style.transform = 'scaleX(' + Math.min(1, Math.max(0, y / docH)).toFixed(4) + ')';
    if (!this.still) {
      const skT = Math.max(-2.5, Math.min(2.5, dy * 0.07));
      this._sk = (this._sk || 0) + (skT - (this._sk || 0)) * 0.12;
      if (Math.abs(this._sk - (this._skSet || 0)) > 0.01) { this._skSet = this._sk; R.style.setProperty('--sk', this._sk.toFixed(3) + 'deg'); }
    }

    // hero visibility + scroll-out
    if (this.hero) {
      const hr = this.hero.getBoundingClientRect();
      this.heroVisible = hr.bottom > 0 && hr.top < vh;
      this.heroP = Math.min(1, Math.max(0, -hr.top / Math.max(1, hr.height)));
      if (!this.still && this.heroCopy && this.heroVisible) {
        this.heroCopy.style.translate = (-this.mouse.x * 10).toFixed(1) + 'px ' + (this.heroP * 90 - this.mouse.y * 6).toFixed(1) + 'px';
        this.heroCopy.style.opacity = (1 - this.heroP * 1.1).toFixed(3);
      }
    }

    // scroll spy
    let cur = -1;
    this.spySecs.forEach((sec, i) => { if (sec && sec.getBoundingClientRect().top <= vh * 0.4) cur = i; });
    if (cur !== this._spy) {
      this._spy = cur;
      this.spyLinks.forEach((a, i) => { if (i === cur) a.setAttribute('data-current', '1'); else a.removeAttribute('data-current'); });
    }

    if (!this.still) {
      const k = this.props && this.props.motion !== undefined ? this.props.motion : 1;
      // parallax (individual translate, so it never fights reveal transforms)
      for (let i = 0; i < this.par.length; i++) {
        const p = this.par[i], box = (p.el.parentElement || p.el).getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        const prog = (box.top + box.height / 2 - vh / 2) / vh;
        const tgt = -prog * p.f * box.height * k;
        p.cur += (tgt - p.cur) * 0.1;
        p.el.style.translate = '0 ' + p.cur.toFixed(2) + 'px';
      }
      // why: entry reveal, focus the item nearest the viewport centre, drive the timeline and counter
      if (this.why) {
        const wr = this.why.getBoundingClientRect();
        const wi = Math.min(1, Math.max(0, wr.top / (vh * 0.9)));
        if (Math.abs(wi - (this._wi === undefined ? -1 : this._wi)) > 0.002) { this._wi = wi; this.why.style.setProperty('--wi', wi.toFixed(3)); }
        if (wr.bottom > 0 && wr.top < vh) {
          if (!this._whyList) { this._whyList = this.why.querySelector('.why-list'); this._whySticky = this.why.querySelector('.why-sticky'); }
          let best = -1, bd = 1e9, first = 0, last = 0;
          this.whyItems.forEach((it, i) => {
            const h = it.querySelector('h3');
            const c = (h || it).getBoundingClientRect().top;
            if (i === 0) first = c;
            last = c;
            const d = Math.abs(c - vh * 0.5);
            if (d < bd) { bd = d; best = i; }
          });
          const wpT = Math.min(1, Math.max(0, (vh * 0.5 - first) / Math.max(1, last - first)));
          this._wp = (this._wp || 0) + (wpT - (this._wp || 0)) * 0.12;
          if (this._whyList) this._whyList.style.setProperty('--wp', this._wp.toFixed(4));
          if (this._whySticky) this._whySticky.style.setProperty('--wp', this._wp.toFixed(4));
          if (best !== this._whyA) {
            this._whyA = best;
            this.whyItems.forEach((it, i) => { if (i === best) it.setAttribute('data-active', '1'); else it.removeAttribute('data-active'); });
            if (this._whySticky) this._whySticky.style.setProperty('--ws', String(Math.max(0, best)));
          }
        }
      }
    }

    if (this.fspot && this.fspot.live) {
      const F = this.fspot;
      F.x += (F.tx - F.x) * 0.14; F.y += (F.ty - F.y) * 0.14;
      F.el.style.setProperty('--fx', F.x.toFixed(1) + 'px');
      F.el.style.setProperty('--fy', F.y.toFixed(1) + 'px');
      F.el.style.setProperty('--px', ((0.5 - F.x / F.w) * 34).toFixed(2) + 'px');
      F.el.style.setProperty('--py', ((0.5 - F.y / F.h) * 22).toFixed(2) + 'px');
      if (!F.on && Math.abs(F.tx - F.x) < 0.5 && Math.abs(F.ty - F.y) < 0.5) F.live = false;
    }

    // brand ticker: continuous lateral flow, eases down while hovered
    if (!this.still) {
      const k2 = this.props && this.props.motion !== undefined ? this.props.motion : 1;
      for (let i = 0; i < this.tickers.length; i++) {
        const T = this.tickers[i];
        if (!T.track) continue;
        const rr = T.row.getBoundingClientRect();
        if (rr.bottom < -50 || rr.top > vh + 50) continue;
        if (!T.P) T.P = T.track.scrollWidth / 4;
        if (!T.P) continue;
        T.v += (T.vt - T.v) * 0.06;
        T.x += T.dir * 26 * T.v * Math.max(0.25, k2) * dt;
        if (T.x <= -T.P) T.x += T.P;
        if (T.x > 0) T.x -= T.P;
        T.track.style.translate = T.x.toFixed(2) + 'px 0';
      }
    }

    this.mouse.x += (this.mouse.tx - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.ty - this.mouse.y) * 0.05;
    if (this.G && this.G.ready) this.drawGL(now);
  }

  /* ---------- hero: depth-parallax WebGL scene built from the original photos ---------- */
  initGL() {
    this.R.setAttribute('data-glfail', '1');
    return;
  }

  initGLOriginal() {
    const cv = this.R.querySelector('.hero-gl');
    if (!cv) return;
    let gl = null;
    try { gl = cv.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    const fail = () => { this.R.setAttribute('data-glfail', '1'); this.R.removeAttribute('data-gl'); if (this.G) this.G.ready = false; };
    if (!gl) { fail(); return; }
    const VS = 'attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*0.5+0.5,0.5-p.y*0.5);gl_Position=vec4(p,0.0,1.0);}';
    const FS = [
      'precision highp float;',
      'varying vec2 v;',
      'uniform sampler2D uC0;uniform sampler2D uD0;uniform sampler2D uC1;uniform sampler2D uD1;',
      'uniform vec2 uRes;uniform vec2 uImg;uniform vec2 uMouse;',
      'uniform float uTime;uniform float uMix;uniform float uScale;uniform float uFocus;uniform float uIntro;uniform float uAmt;uniform float uHov;',
      'float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}',
      'float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);',
      ' return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);}',
      'vec2 cover(vec2 uv){float rs=uRes.x/uRes.y;float ri=uImg.x/uImg.y;',
      ' vec2 s=rs>ri?vec2(1.0,ri/rs):vec2(rs/ri,1.0);',
      ' vec2 c=vec2(clamp(uFocus,s.x*0.5,1.0-s.x*0.5),0.5);return (uv-0.5)*s+c;}',
      'vec3 layer(sampler2D C,sampler2D D,vec2 uv,vec2 off){vec2 u=uv;',
      ' for(int i=0;i<4;i++){float d=texture2D(D,u).r;u=uv+off*(d-0.42);}',
      ' return texture2D(C,clamp(u,vec2(0.002),vec2(0.998))).rgb;}',
      'float particles(vec2 q,float t,float sc,float sp,float seed,float dens,float r0,float r1){',
      ' vec2 p=q*vec2(sc*uRes.x/uRes.y,sc);p.y+=t*sp;p.x+=sin(t*0.27+seed+p.y*0.35)*0.45;',
      ' vec2 id=floor(p);vec2 f=fract(p)-0.5;float h=hash(id+seed);',
      ' vec2 o=vec2(hash(id+seed+1.37),hash(id+seed+7.13))-0.5;',
      ' float r=mix(r0,r1,hash(id+seed+3.1));',
      ' float a=(1.0-smoothstep(0.0,r,length(f-o*0.6)))*step(dens,h);',
      ' return a*(0.55+0.45*sin(t*(1.5+h*2.0)+h*40.0));}',
      'float rays(vec2 q,float t){vec2 d=q-vec2(0.82,-0.25);float an=atan(d.y,d.x);',
      ' float r=pow(0.5+0.5*sin(an*17.0+t*0.32),6.0)+0.7*pow(0.5+0.5*sin(an*9.0-t*0.21+1.7),8.0);',
      ' return r*(1.0-smoothstep(0.15,1.5,length(d)));}',
      'void main(){',
      ' float ang=sin(uTime*0.19)*0.007*uAmt;',
      ' vec2 cv=v-0.5;cv=vec2(cv.x*cos(ang)-cv.y*sin(ang),cv.x*sin(ang)+cv.y*cos(ang))+0.5;',
      ' vec2 uv=cover(cv);uv=(uv-0.5)/uScale+0.5;',
      ' vec2 drift=vec2(sin(uTime*0.31),sin(uTime*0.23+1.3)*0.7)*0.03;',
      ' vec2 off=(uMouse*vec2(0.05,0.032)+drift)*uAmt;',
      ' vec3 col=layer(uC0,uD0,uv,off);float dep=texture2D(uD0,uv).r;',
      ' if(uMix>0.0){',
      '  vec3 nx=layer(uC1,uD1,uv,off);float d1=texture2D(uD1,uv).r;',
      '  float n=noise(uv*5.0+uTime*0.15);',
      '  float t=clamp(uMix*2.4-1.1+d1*0.55+(n-0.5)*0.45,0.0,1.0);t=t*t*(3.0-2.0*t);',
      '  float edge=pow(4.0*t*(1.0-t),6.0);',
      '  col=mix(col,nx,t)+vec3(0.88,0.06,0.28)*edge*0.22;dep=mix(dep,d1,t);',
      ' }',
      ' float sw=fract(uTime*0.09)*2.6-0.8;',
      ' float band=exp(-pow((v.x*0.85-v.y*0.45-sw)*6.0,2.0));',
      ' col+=band*smoothstep(0.45,0.95,dep)*0.1;',
      ' float far=1.0-smoothstep(0.3,0.7,dep);',
      ' col+=rays(v+uMouse*0.01,uTime)*far*0.075*vec3(0.82,0.9,1.0)*uAmt;',
      ' float dust=particles(v+uMouse*0.006,uTime,7.0,0.08,3.0,0.68,0.02,0.06);',
      ' float emb=particles(v+uMouse*0.018,uTime,13.0,0.6,11.0,0.8,0.03,0.075)*smoothstep(0.1,0.85,v.y);',
      ' float bok=particles(v+uMouse*0.003,uTime,3.2,0.03,23.0,0.82,0.06,0.12);',
      ' col+=dust*0.3*vec3(0.92,0.95,1.0)*uAmt;',
      ' col+=emb*0.82*mix(vec3(1.0,0.55,0.22),vec3(0.88,0.06,0.28),0.45)*uAmt;',
      ' vec2 mv=uMouse*0.5+0.5;vec2 dm=(v-mv)*vec2(uRes.x/uRes.y,1.0);float ml=exp(-dot(dm,dm)*9.0);',
      ' col+=ml*uHov*(0.12*vec3(1.0,0.94,0.88)+0.07*vec3(0.88,0.06,0.28)*smoothstep(0.3,0.9,dep));',
      ' col+=bok*0.07*vec3(0.75,0.85,1.0)*uAmt;',
      ' col*=1.0+0.035*sin(uTime*1.7)*sin(uTime*0.6);',
      ' col+=(hash(v*uRes+fract(uTime)*91.0)-0.5)*0.022;',
      ' gl_FragColor=vec4(col*uIntro,1.0);',
      '}'
    ].join('\n');
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
    const vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) { fail(); return; }
    const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { fail(); return; }
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const ap = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 0, 0);
    const L = {};
    ['uC0', 'uD0', 'uC1', 'uD1', 'uRes', 'uImg', 'uMouse', 'uTime', 'uMix', 'uScale', 'uFocus', 'uIntro', 'uAmt', 'uHov'].forEach((n) => { L[n] = gl.getUniformLocation(pr, n); });
    gl.uniform1i(L.uC0, 0); gl.uniform1i(L.uD0, 1); gl.uniform1i(L.uC1, 2); gl.uniform1i(L.uD1, 3);
    const SRC = [
      ['/_blob/ed4eb11e90d5302cd43c5db1f9af7749', '/_blob/70f45ed6a8da0047ace5662e5928d326'],
      ['/_blob/6d0141d291ebc9dcfbfd7d253db21ae8', '/_blob/c1279ce125a54e48373fe98ddc9799af'],
      ['/_blob/3665d3c98099584f584ad331793edab5', '/_blob/ee29bee474e7919be28791986016b836']
    ];
    this.G = { gl: gl, cv: cv, L: L, tex: SRC.map(() => ({ c: null, d: null })), cur: this.st('slide', 0), nxt: -1, t0: 0, start: 0, ready: false, w: 0, h: 0 };
    const G = this.G;
    const mk = (im) => {
      const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return t;
    };
    SRC.forEach((pair, i) => pair.forEach((src, k) => {
      const im = new Image();
      im.onload = () => {
        if (!this.G) return;
        try { G.tex[i][k ? 'd' : 'c'] = mk(im); } catch (e) { fail(); return; }
        const c = G.tex[G.cur];
        if (!G.ready && c.c && c.d) { G.ready = true; G.start = performance.now(); clearTimeout(this._glFailT); this.R.setAttribute('data-gl', '1'); }
      };
      im.onerror = () => { if (i === G.cur && !G.ready) fail(); };
      im.src = src;
    }));
    this._glFailT = setTimeout(() => { if (this.G && !this.G.ready) fail(); }, 4000);
    this.on(cv, 'webglcontextlost', (e) => { e.preventDefault(); fail(); });
  }

  glTo(i) {
    const G = this.G;
    if (!G || !G.ready) return;
    if (G.nxt >= 0) G.cur = G.nxt;
    const t = G.tex[i];
    if (!t || !t.c || !t.d) { G.cur = i; G.nxt = -1; return; }
    if (i === G.cur) { G.nxt = -1; return; }
    G.nxt = i; G.t0 = performance.now();
  }

  drawGL(now) {
    const G = this.G, gl = G.gl, L = G.L, cv = G.cv;
    if (!this.heroVisible) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.round(cv.clientWidth * dpr)), h = Math.max(1, Math.round(cv.clientHeight * dpr));
    if (w !== G.w || h !== G.h) { cv.width = w; cv.height = h; G.w = w; G.h = h; gl.viewport(0, 0, w, h); }
    const time = (now - G.start) / 1000;
    const intro = this.still ? 1 : 1 - Math.pow(1 - Math.min(1, time / 2.2), 3);
    let mix = 0, bump = 0;
    if (G.nxt >= 0) {
      const tt = Math.min(1, (now - G.t0) / 1700);
      mix = tt < 0.5 ? 4 * tt * tt * tt : 1 - Math.pow(-2 * tt + 2, 3) / 2;
      bump = Math.sin(mix * Math.PI) * 0.035;
      if (tt >= 1) { G.cur = G.nxt; G.nxt = -1; mix = 0; bump = 0; }
    }
    const a = G.tex[G.cur], b = G.nxt >= 0 ? G.tex[G.nxt] : a;
    const k = this.props && this.props.motion !== undefined ? this.props.motion : 1;
    const scale = 1.07 + 0.025 * Math.sin(time * 0.26) + this.heroP * 0.07 + bump + (1 - intro) * 0.16;
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, a.c);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, a.d);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, b.c);
    gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, b.d);
    gl.uniform2f(L.uRes, w, h);
    gl.uniform2f(L.uImg, 1920, 1080);
    gl.uniform2f(L.uMouse, this.mouse.x, this.mouse.y);
    gl.uniform1f(L.uTime, time);
    gl.uniform1f(L.uMix, mix);
    gl.uniform1f(L.uScale, scale);
    gl.uniform1f(L.uFocus, w / h < 1.3 ? 0.62 : 0.5);
    gl.uniform1f(L.uIntro, intro);
    gl.uniform1f(L.uAmt, k);
    this.mouse.h += ((this.mouse.ht || 0) - (this.mouse.h || 0)) * 0.06;
    gl.uniform1f(L.uHov, this.mouse.h || 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}


export function initGlobalSource(host) {
  const p = new GSPage(host);
  if (!p.root) return () => {};
  p.mount();
  return () => p.componentWillUnmount();
}
