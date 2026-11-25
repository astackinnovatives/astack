/* eslint-disable */
// @ts-nocheck
// Original page script from the "foster.html" export, run inside the site and torn down on navigation.
export default function init(gsap, ScrollTrigger) {
  const __track = { mm: null, obs: [], offs: [] };
  const ResizeObserver = class extends window.ResizeObserver { constructor(cb) { super(cb); __track.obs.push(this); } };
  const IntersectionObserver = class extends window.IntersectionObserver { constructor(cb, o) { super(cb, o); __track.obs.push(this); } };
  const addEventListener = (t, f, o) => { window.addEventListener(t, f, o); __track.offs.push(() => window.removeEventListener(t, f, o)); };
(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
// menu
// slide scaling
const fit=f=>{f.style.setProperty('--s',f.clientWidth/1123)};
const ro=new ResizeObserver(es=>es.forEach(e=>fit(e.target)));$$('.frame').forEach(f=>ro.observe(f));
// toast & copy
const toast=$('#toast');let tt;function say(t){toast.textContent=t;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),1800)}
$$('[data-hex]').forEach(b=>b.addEventListener('click',async()=>{const h=b.dataset.hex;try{await navigator.clipboard.writeText(h);say('Copied '+h)}catch(e){say(h)}}));
// type tester
const te=$('#tester'),w=$('#w'),s=$('#s'),itb=$('#itb');
function upd(){te.style.setProperty('--w',w.value);te.style.setProperty('--s',s.value);$('#wo').textContent=w.value;$('#so').textContent=s.value}
w.addEventListener('input',upd);s.addEventListener('input',upd);
itb.addEventListener('click',()=>{const p=itb.getAttribute('aria-pressed')!=='true';itb.setAttribute('aria-pressed',p);te.classList.toggle('it',p)});
// lightbox
const lb=$('#lb'),lbc=$('#lbc');
$$('.slide .frame').forEach(f=>f.addEventListener('click',()=>{lbc.innerHTML='';const c=f.cloneNode(true);c.removeAttribute('aria-label');c.setAttribute('tabindex','-1');lbc.appendChild(c);lb.showModal();requestAnimationFrame(()=>fit(c));ro.observe(c)}));
$('.x',lb).addEventListener('click',()=>lb.close());lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
// anatomy (works with or without motion)
const anat=$('#anat'),ovs=$$('.ov',anat),steps=$$('.step',anat);
function act(i){ovs.forEach((o,k)=>o.classList.toggle('on',k==i));steps.forEach((o,k)=>o.classList.toggle('on',k==i));anat.classList.toggle('dim',i>=0)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)act(+e.target.dataset.i)}),{rootMargin:'-45% 0px -45% 0px'});
steps.forEach(s=>{io.observe(s);s.addEventListener('mouseenter',()=>act(+s.dataset.i))});
// chips
$$('.chip').forEach(c=>c.addEventListener('click',()=>{const el=document.getElementById(c.dataset.go);if(!el)return;
 if(window.__railST&&window.__railST.isActive!==undefined&&window.__railMax){const r=$('#rail');const x=el.offsetLeft-parseFloat(getComputedStyle(r).paddingLeft);const st=window.__railST;const y=st.start+(x/window.__railMax)*(st.end-st.start);window.scrollTo({top:Math.min(y,st.end),behavior:'smooth'})}
 else el.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})}));

if(!gsap){act(0);return}
gsap.registerPlugin(ScrollTrigger);
const mm=__track.mm=gsap.matchMedia();
mm.add({motion:"(prefers-reduced-motion: no-preference)",wide:"(min-width: 861px)"},ctx=>{
 const {motion,wide}=ctx.conditions;
 if(!motion){act(0);return}
 // HERO intro: draw the logo
 const paths=$$('.hero-logo path');
 paths.forEach(p=>{const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;p.style.stroke='#F5F3EF';p.style.strokeWidth=50;p.style.fillOpacity=0});
 const tag=$('[data-split]');const txt=tag.textContent;tag.innerHTML=txt.split('').map(c=>`<span style="display:inline-block;white-space:pre">${c}</span>`).join('');
 const tl=gsap.timeline({defaults:{ease:'power3.out'}});
 tl.to({},{duration:.4})
   .from('.crumb',{opacity:0,y:12,duration:.6},'-=.3')
   .to(paths,{strokeDashoffset:0,duration:2,stagger:.05,ease:'power2.inOut'},'-=.2')
   .to(paths,{fillOpacity:1,strokeWidth:0,duration:.8,stagger:.02},'-=.6')
   .from('[data-split] span',{opacity:0,y:30,rotate:8,duration:.6,stagger:.025},'-=.5')
   .from('.meta>div',{opacity:0,y:20,duration:.6,stagger:.08},'-=.4');
 gsap.to('.hero .wrap',{yPercent:-18,opacity:.2,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 // WINDOW zoom
 const wtl=gsap.timeline({scrollTrigger:{trigger:'.window',start:'top top',end:'+=160%',scrub:1,pin:true}});
 const vw=$('.window .view'),cp={p:0};wtl.to(cp,{p:1,ease:'power2.in',onUpdate:()=>{const q=1-cp.p;vw.style.clipPath=`inset(calc((50% - 132px) * ${q}) calc((50% - 92px) * ${q}) round ${90*q}px)`}},0)
    .to('.window .frameO',{scale:14,opacity:0,ease:'power2.in'},0)
    .to('.window .wt',{opacity:0,y:-40,duration:.3},0)
    .to('.window .wt2',{opacity:1,duration:.3},.7);
 // construction lines
 $$('.cons .gl').forEach(l=>{const L=l.getTotalLength?l.getTotalLength():2000;gsap.fromTo(l,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.cons',start:'top 75%',end:'center 50%',scrub:true}})});
 // monogram app icons
 gsap.from('.appi',{y:40,opacity:0,stagger:.1,duration:.8,ease:'back.out(1.6)',scrollTrigger:{trigger:'.apps',start:'top 85%'}});
 // colours ratio
 gsap.from('.ratio i',{scaleX:0,stagger:.12,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.ratio',start:'top 90%'}});
 // flight line draw
 const fp=$('#flp');const FLL=fp.getTotalLength();gsap.fromTo(fp,{strokeDasharray:FLL,strokeDashoffset:FLL},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.fl-stage',start:'top 85%',end:'bottom 45%',scrub:true}});
 // rail
 if(wide){const rail=$('#rail');const max=()=>rail.scrollWidth-window.innerWidth;
  const tw=gsap.to(rail,{x:()=>-max(),ease:'none',scrollTrigger:{trigger:'.rail-pin',start:'center center',end:()=>'+='+max(),scrub:1,pin:true,invalidateOnRefresh:true,
   onUpdate:self=>{gsap.set('#prog',{scaleX:self.progress});window.__railMax=max();const x=self.progress*max();let cur=null;$$('.slide[id]').forEach(s=>{if(s.offsetLeft-200<=x+parseFloat(getComputedStyle(rail).paddingLeft))cur=s.id});$$('.chip').forEach(c=>c.classList.toggle('on',c.dataset.go===cur))}}});
  window.__railST=tw.scrollTrigger;window.__railMax=max();
  }
 // jet flyby
 gsap.fromTo('#jet',{x:()=>-window.innerWidth*0.9,y:120,rotate:-2},{x:()=>window.innerWidth*1.05,y:-140,rotate:-8,ease:'none',scrollTrigger:{trigger:'.jet-sec',start:'top bottom',end:'bottom top',scrub:true,invalidateOnRefresh:true}});
 // deliverable counters
 $$('[data-count]').forEach(b=>{const v=+b.dataset.count,o={n:0};gsap.to(o,{n:v,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:b,start:'top 90%'},onUpdate:()=>b.textContent=Math.round(o.n)})});
 document.fonts&&document.fonts.ready.then(()=>ScrollTrigger.refresh());
 return()=>{window.__railST=null};
});
})();
  return () => {
    if (__track.mm) __track.mm.revert();
    __track.obs.forEach((o) => o.disconnect());
    __track.offs.forEach((f) => f());
    window.__railST = null; window.__railMax = 0;
    const lb = document.getElementById("lb"); if (lb && lb.open) lb.close();
  };
}
