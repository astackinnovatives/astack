/* eslint-disable */
// @ts-nocheck
// Original page script from the "gs.html" export, run inside the site and torn down on navigation.
export default function init(gsap, ScrollTrigger) {
  const __track = { mm: null, obs: [], offs: [] };
  const ResizeObserver = class extends window.ResizeObserver { constructor(cb) { super(cb); __track.obs.push(this); } };
  const IntersectionObserver = class extends window.IntersectionObserver { constructor(cb, o) { super(cb, o); __track.obs.push(this); } };
  const addEventListener = (t, f, o) => { window.addEventListener(t, f, o); __track.offs.push(() => window.removeEventListener(t, f, o)); };
(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const LOGO={color:"/assets/images/branding/global-source/613d0101c2.png",white:"/assets/images/branding/global-source/9ea778ee98.png",black:"/assets/images/branding/global-source/bd73d489c2.png"},SYM={color:"/assets/images/branding/global-source/fb17608336.png",white:"/assets/images/branding/global-source/fdb64f56ea.png",black:"/assets/images/branding/global-source/fed8afbd6f.png"};
// menu
// toast/copy
const toast=$('#toast');let tt;function say(t){toast.textContent=t;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),1800)}
$$('[data-hex]').forEach(b=>b.addEventListener('click',async()=>{const h=b.dataset.hex;try{await navigator.clipboard.writeText(h);say('Copied '+h)}catch(e){say(h)}}));
// tabs
const tabs=$$('[role=tab]');function sel(i,focus){tabs.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.tabIndex=k===i?0:-1;$('#p'+k).hidden=k!==i});if(focus)tabs[i].focus();
 if(gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.from('#p'+i,{opacity:0,y:16,duration:.5,ease:'power3.out'})}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>sel(i));t.addEventListener('keydown',e=>{if(e.key==='ArrowRight')sel((i+1)%tabs.length,1);if(e.key==='ArrowLeft')sel((i+tabs.length-1)%tabs.length,1)})});
// logo lab
const stage=$('#stage'),img=$('#lkimg');let v='color',sym=false;
function draw(){img.src=(sym?SYM:LOGO)[v];stage.classList.toggle('sym',sym)}
$$('.bgb').forEach(b=>b.addEventListener('click',()=>{$$('.bgb').forEach(x=>x.setAttribute('aria-pressed',x===b));stage.style.background=b.dataset.bg;v=b.dataset.v;draw()}));
const vF=$('#vFull'),vS=$('#vSym'),vZ=$('#vZone');
vF.onclick=()=>{sym=false;vF.setAttribute('aria-pressed',true);vS.setAttribute('aria-pressed',false);draw()};
vS.onclick=()=>{sym=true;vS.setAttribute('aria-pressed',true);vF.setAttribute('aria-pressed',false);draw()};
vZ.onclick=()=>{const on=stage.classList.toggle('zoneon');vZ.setAttribute('aria-pressed',on)};
// app icon tilt
$$('.ai').forEach(a=>{a.addEventListener('pointermove',e=>{const r=a.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;a.style.transform=`rotateY(${x*24}deg) rotateX(${-y*24}deg) translateZ(10px)`});a.addEventListener('pointerleave',()=>a.style.transform='')});
// arabic weight
const aw=$('#aw');aw.addEventListener('input',()=>{$('#abc').style.fontWeight=aw.value;$('#aa').style.fontWeight=aw.value;$('#awo').textContent=aw.value});
// lightbox
const lb=$('#lb');$$('.shot').forEach(s=>s.addEventListener('click',()=>{const i=$('img',s);$('#lbimg').src=i.src;$('#lbimg').alt=i.alt;$('#lbcap').textContent=s.closest('figure').querySelector('figcaption').lastChild.textContent;lb.showModal()}));
$('.x',lb).onclick=()=>lb.close();lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
// chips
$$('.chip').forEach(c=>c.addEventListener('click',()=>{const el=document.getElementById(c.dataset.go);if(!el)return;const st=window.__railST;
 if(st){const r=$('#rail');const x=el.offsetLeft-parseFloat(getComputedStyle(r).paddingLeft);const max=r.scrollWidth-innerWidth;window.scrollTo({top:Math.min(st.start+(x/max)*(st.end-st.start),st.end),behavior:'smooth'})}
 else el.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})}));
if(!gsap)return;
gsap.registerPlugin(ScrollTrigger);
const mm=__track.mm=gsap.matchMedia();
mm.add({motion:"(prefers-reduced-motion: no-preference)",wide:"(min-width: 861px)"},ctx=>{
 const {motion,wide}=ctx.conditions;if(!motion)return;
 // hero: curves draw, logo wipes in from the right (Arabic reads first), headline words rise
 $$('.hero .curves path').forEach(p=>{const L=p.getTotalLength();gsap.set(p,{strokeDasharray:L,strokeDashoffset:L})});
 const h1=$('#h1');h1.innerHTML=h1.textContent.split(' ').map(w=>`<span>${w}</span>`).join(' ');
 gsap.timeline({defaults:{ease:'power3.out'}})
  .to({},{duration:.4})
  .to('.hero .curves path',{strokeDashoffset:0,duration:1.8,stagger:.2,ease:'power2.inOut'},'-=.3')
  .fromTo('#heroLogo',{clipPath:'inset(0 0 0 100%)'},{clipPath:'inset(0 0 0 0%)',duration:1.4,ease:'power4.inOut'},'-=1.6')
  .from('#h1 span',{yPercent:110,opacity:0,duration:.8,stagger:.08},'-=.6')
  .from('.meta>div',{opacity:0,y:18,duration:.6,stagger:.08},'-=.4');
 gsap.to('.hero .wrap',{yPercent:-14,opacity:.25,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 // logo idea: build the equation, then everything resolves into the mark
 if(wide){
  const it=gsap.timeline({scrollTrigger:{trigger:'#idea',start:'top top',end:'+=170%',scrub:1,pin:true}});
  it.from('.eq .g',{x:-80,opacity:0}).from('.eq .plus:nth-of-type(1)',{scale:0,opacity:0},'<.2')
    .from('.eq .unity',{y:60,opacity:0}).from('.eq .plus:nth-of-type(2)',{scale:0,opacity:0},'<.2')
    .from('.eq .result',{x:80,opacity:0})
    .from('.arrow',{y:30,opacity:0})
    .to('.eq .part',{opacity:.15,filter:'grayscale(1)',duration:.6},'+=.3')
    .to('.eq .result img',{scale:1.18,duration:.6},'<');
 } else gsap.from('.eq figure,.eq .plus',{opacity:0,y:30,stagger:.15,duration:.7,scrollTrigger:{trigger:'.eq',start:'top 80%'}});
 // essence words
 gsap.from('#ess',{opacity:0,scale:.92,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'#ess',start:'top 85%'}});
 // app icons
 gsap.from('.ai',{y:60,opacity:0,rotate:-8,stagger:.12,duration:.9,ease:'back.out(1.7)',scrollTrigger:{trigger:'.icons',start:'top 85%'}});
 // tints grow
 gsap.from('.tb',{scaleY:0,transformOrigin:'bottom',stagger:.06,duration:.6,ease:'power3.out',scrollTrigger:{trigger:'.sws',start:'top 85%'}});
 // rail
 if(wide){const rail=$('#rail');const max=()=>rail.scrollWidth-innerWidth;
  const tw=gsap.to(rail,{x:()=>-max(),ease:'none',scrollTrigger:{trigger:'.rail-pin',start:'center center',end:()=>'+='+max(),scrub:1,pin:true,invalidateOnRefresh:true,
   onUpdate:self=>{gsap.set('#prog',{scaleX:self.progress});const x=self.progress*max()+parseFloat(getComputedStyle(rail).paddingLeft);let cur=null;$$('.slide[id]').forEach(s=>{if(s.offsetLeft-200<=x)cur=s.id});$$('.chip').forEach(c=>c.classList.toggle('on',c.dataset.go===cur))}}});
  window.__railST=tw.scrollTrigger;}
 // billboard push-in
 gsap.fromTo('#billimg',{scale:1.25},{scale:1,ease:'none',scrollTrigger:{trigger:'.bill',start:'top bottom',end:'bottom top',scrub:true}});
 // credit curves
 $$('.credit .curves path').forEach(p=>{const L=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.credit',start:'top 80%',end:'bottom bottom',scrub:true}})});
 // counters
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
