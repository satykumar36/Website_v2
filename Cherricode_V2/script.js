// const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
// let mx=0,my=0,rx=0,ry=0;
// document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
// (function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim);})();
// document.querySelectorAll('a,button,.faq-q,.service-card,.why-item,.value-card').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.classList.add('hover');ring.classList.add('hover');});el.addEventListener('mouseleave',()=>{cursor.classList.remove('hover');ring.classList.remove('hover');});});

// function showPage(id){
//   console.log("showing",id);
//   document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
//   document.getElementById('page-'+id).classList.add('active');
//   document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
//   const n=document.getElementById('nav-'+id);
//   if(n)n.classList.add('active');
//   window.scrollTo({top:0,behavior:'smooth'});
//   setTimeout(observeFadeUps,100);
//   return false;
// }

// const nav=document.getElementById('mainNav');
// window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20));

// function observeFadeUps(){
//   const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.12});
//   document.querySelectorAll('.page.active .fade-up').forEach(el=>{el.classList.remove('visible');obs.observe(el);});
// }
// observeFadeUps();

const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

function observeFadeUps() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.classList.remove('visible');
    obs.observe(el);
  });
}

// Run on page load
window.addEventListener('load', () => {
  observeFadeUps();
});

function toggleFaq(el){
  const item=el.parentElement;
  const open=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}

function submitForm(){
  const s=document.getElementById('successMsg');
  s.style.display='block';
  s.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ---------Migration js----
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.option').forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    option.querySelector('input').checked = true;
  });
});

// ---------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});