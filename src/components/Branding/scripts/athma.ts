/* eslint-disable */
// @ts-nocheck
// Original page script from the "athma.html" export, run inside the site and torn down on navigation.
export default function init(gsap, ScrollTrigger) {
  const __track = { mm: null, obs: [], offs: [] };
  const ResizeObserver = class extends window.ResizeObserver { constructor(cb) { super(cb); __track.obs.push(this); } };
  const IntersectionObserver = class extends window.IntersectionObserver { constructor(cb, o) { super(cb, o); __track.obs.push(this); } };
  const addEventListener = (t, f, o) => { window.addEventListener(t, f, o); __track.offs.push(() => window.removeEventListener(t, f, o)); };
(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const LOGO={color:"/assets/images/branding/athma/6cd5560d44.png",white:"/assets/images/branding/athma/012d61e992.png",grey:"/assets/images/branding/athma/fe577ce4f9.png"},SYM={color:"/assets/images/branding/athma/575dfe06e2.png",white:"/assets/images/branding/athma/0ed45334bf.png",grey:"/assets/images/branding/athma/575dfe06e2.png"};
const toast=$('#toast');let tt;function say(t){toast.textContent=t;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),1800)}
$$('[data-hex]').forEach(b=>b.addEventListener('click',async()=>{const h=b.dataset.hex;try{await navigator.clipboard.writeText(h);say('Copied '+h)}catch(e){say(h)}}));
// clutter -> calm line
const N=520,W=640,H=360,path=$('#mind');
const tangled=[],calm=[];
for(let i=0;i<N;i++){const t=i/(N-1);
 tangled.push([40+t*560+70*Math.cos(t*61+.4)+38*Math.cos(t*97+1.3)+20*Math.sin(t*151),180+95*Math.sin(t*53+.2)+48*Math.sin(t*89+2.1)+22*Math.cos(t*137)]);
 calm.push([40+t*560,180+34*Math.sin(t*Math.PI*3)*(0.6+0.4*Math.sin(t*Math.PI))]);}
const states=$$('#state span'),bars=$$('.meter i');let last=-1;
function setMind(p){let d='';for(let i=0;i<N;i++){const e=p*p*(3-2*p);const x=tangled[i][0]+(calm[i][0]-tangled[i][0])*e,y=tangled[i][1]+(calm[i][1]-tangled[i][1])*e;d+=(i?'L':'M')+x.toFixed(1)+','+y.toFixed(1)}path.setAttribute('d',d);
 const s=p<.34?0:p<.75?1:2;if(s!==last){last=s;states.forEach((el,k)=>el.style.opacity=k===s?1:0);bars.forEach((b,k)=>b.classList.toggle('on',k<=s))}}
setMind(0);
// logo lab
const stage=$('#stage'),img=$('#lkimg');let v='color',sym=false;
function draw(){img.src=(sym?SYM:LOGO)[v];if(sym&&v==='grey')img.style.filter='grayscale(1) brightness(.55)';else img.style.filter='';stage.classList.toggle('sym',sym)}
$$('.bgb').forEach(b=>b.addEventListener('click',()=>{$$('.bgb').forEach(x=>x.setAttribute('aria-pressed',x===b));stage.style.background=b.dataset.bg;v=b.dataset.v;draw()}));
const vF=$('#vFull'),vS=$('#vSym'),vZ=$('#vZone');
vF.onclick=()=>{sym=false;vF.setAttribute('aria-pressed',true);vS.setAttribute('aria-pressed',false);draw()};
vS.onclick=()=>{sym=true;vS.setAttribute('aria-pressed',true);vF.setAttribute('aria-pressed',false);draw()};
vZ.onclick=()=>{const on=stage.classList.toggle('zoneon');vZ.setAttribute('aria-pressed',on)};
const tw=$('#tw');tw.addEventListener('input',()=>{$('#tester').style.setProperty('--w',tw.value);$('#two').textContent=tw.value});
const lb=$('#lb');$$('.shot').forEach(s=>s.addEventListener('click',()=>{const i=$('img',s);$('#lbimg').src=i.src;$('#lbimg').alt=i.alt;$('#lbcap').textContent=s.closest('figure').querySelector('figcaption').lastChild.textContent;lb.showModal()}));
$('.x',lb).onclick=()=>lb.close();lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
$$('.chip').forEach(c=>c.addEventListener('click',()=>{const el=document.getElementById(c.dataset.go);if(!el)return;const st=window.__railST;
 if(st){const r=$('#rail');const x=el.offsetLeft-parseFloat(getComputedStyle(r).paddingLeft);const max=r.scrollWidth-innerWidth;window.scrollTo({top:Math.min(st.start+(x/max)*(st.end-st.start),st.end),behavior:'smooth'})}
 else el.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})}));
if(!gsap){setMind(1);return}
gsap.registerPlugin(ScrollTrigger);
const mm=__track.mm=gsap.matchMedia();
mm.add({motion:"(prefers-reduced-motion: no-preference)",wide:"(min-width: 861px)"},ctx=>{
 const {motion,wide}=ctx.conditions;if(!motion){setMind(1);return}
 // hero: ribbons unfurl, logo settles, words breathe in
 $$('.hero .swirl path').forEach(p=>{const L=p.getTotalLength();gsap.set(p,{strokeDasharray:L,strokeDashoffset:L})});
 gsap.timeline({defaults:{ease:'sine.out'}})
  .to({},{duration:.4})
  .to('.hero .swirl path',{strokeDashoffset:0,duration:2.4,stagger:.3,ease:'power2.inOut'},'-=.3')
  .from('#heroLogo',{opacity:0,y:24,filter:'blur(8px)',duration:1.4},'-=2')
  .from('#h1 .l1,#h1 .l2',{opacity:0,y:40,duration:1.1,stagger:.25},'-=.9')
  .from('.hero .sub,.meta>div',{opacity:0,y:16,duration:.8,stagger:.08},'-=.6');
 gsap.to('.hero .wrap',{yPercent:-12,opacity:.3,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 // clutter -> calm (pinned)
 const o={p:0};
 gsap.to(o,{p:1,ease:'none',onUpdate:()=>setMind(o.p),scrollTrigger:{trigger:'#calm',start:'top top',end:'+=150%',scrub:1.2,pin:true}});
 // meaning equation
 gsap.from('#eq>*',{opacity:0,y:30,duration:.9,stagger:.18,ease:'sine.out',scrollTrigger:{trigger:'#eq',start:'top 78%'}});
 // m dots: a gentle breathing loop once visible
 gsap.fromTo('#mm',{scale:.96},{scale:1.02,duration:3,ease:'sine.inOut',yoyo:true,repeat:-1});
 // construction wipe
 gsap.fromTo('#consArt img',{clipPath:'circle(0% at 50% 50%)'},{clipPath:'circle(75% at 50% 50%)',ease:'none',scrollTrigger:{trigger:'#consArt',start:'top 85%',end:'center 50%',scrub:true}});
 // tints rise
 gsap.from('.tb',{scaleY:0,transformOrigin:'bottom',stagger:.06,duration:.7,ease:'sine.out',scrollTrigger:{trigger:'.sws',start:'top 85%'}});
 // rail
 if(wide){const rail=$('#rail');const max=()=>rail.scrollWidth-innerWidth;
  const t=gsap.to(rail,{x:()=>-max(),ease:'none',scrollTrigger:{trigger:'.rail-pin',start:'center center',end:()=>'+='+max(),scrub:1,pin:true,invalidateOnRefresh:true,
   onUpdate:self=>{gsap.set('#prog',{scaleX:self.progress});const x=self.progress*max()+parseFloat(getComputedStyle(rail).paddingLeft);let cur=null;$$('.slide[id]').forEach(s=>{if(s.offsetLeft-200<=x)cur=s.id});$$('.chip').forEach(c=>c.classList.toggle('on',c.dataset.go===cur))}}});
  window.__railST=t.scrollTrigger;}
 gsap.fromTo('#featimg',{scale:1.2},{scale:1,ease:'none',scrollTrigger:{trigger:'.feat',start:'top bottom',end:'bottom top',scrub:true}});
 $$('.credit .swirl path').forEach(p=>{const L=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.credit',start:'top 80%',end:'bottom bottom',scrub:true}})});
 $$('[data-count]').forEach(b=>{const v=+b.dataset.count,q={n:0};gsap.to(q,{n:v,duration:1.4,ease:'power2.out',scrollTrigger:{trigger:b,start:'top 90%'},onUpdate:()=>b.textContent=Math.round(q.n)})});
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
