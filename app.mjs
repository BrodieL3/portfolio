import {scrollState} from './scroll.mjs';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const short = matchMedia('(max-height: 650px)');
const exhibit = document.querySelector('.scroll-shift');
const stages = [...document.querySelectorAll('[data-stage]')];
const tokens = [...document.querySelectorAll('.inspector-token')];
let frame = 0;
function render() {
 frame = 0;
 const enabled = !reduced.matches && !short.matches;
 exhibit.classList.toggle('scroll-enabled', enabled);
 const {progress, stage} = enabled ? scrollState(exhibit.getBoundingClientRect().top, exhibit.offsetHeight, innerHeight) : {progress:1,stage:2};
 exhibit.style.setProperty('--progress', progress);
 const assign = Math.min(1, progress * 3);
 const inspect = Math.max(0, Math.min(1, (progress - .33) * 3));
 const handoff = Math.max(0, Math.min(1, (progress - .66) * 3));
 exhibit.style.setProperty('--inspect', inspect);
 exhibit.style.setProperty('--handoff', handoff);
 exhibit.style.setProperty('--assign', assign);
 stages.forEach((item,index)=>{item.classList.toggle('current',index===stage);item.setAttribute('aria-hidden',String(enabled&&index!==stage));});
 const destinations = [[183,-148],[296,-183],[409,-103],[522,-23]];
 tokens.forEach((token,i)=>token.setAttribute('transform',`translate(${destinations[i][0]*assign} ${destinations[i][1]*assign})`));
}
function schedule() {if (!frame) frame = requestAnimationFrame(render);}
addEventListener('scroll',schedule,{passive:true});
addEventListener('resize',schedule);
short.addEventListener('change',schedule);
const loops = [...document.querySelectorAll('.motion-diagram')].map(diagram=>({diagram,button:diagram.nextElementSibling,visible:false,paused:false}));
function refreshLoops() {
 for (const loop of loops) {
  loop.diagram.classList.toggle('flow-play', !reduced.matches);
  loop.diagram.classList.toggle('flow-running', loop.visible && !loop.paused && !document.hidden && !reduced.matches);
  loop.button.hidden = reduced.matches;
  loop.button.textContent = loop.paused ? 'Resume animation ↻' : 'Pause animation Ⅱ';
 }
}
const observer = new IntersectionObserver(entries=>{
 for(const entry of entries) loops.find(loop=>loop.diagram===entry.target).visible = entry.isIntersecting;
 refreshLoops();
},{threshold:.2});
for(const loop of loops) {
 observer.observe(loop.diagram);
 loop.button.addEventListener('click',()=>{loop.paused=!loop.paused;refreshLoops();});
}
reduced.addEventListener('change',()=>{schedule();refreshLoops();});
document.addEventListener('visibilitychange',refreshLoops);
render();refreshLoops();
