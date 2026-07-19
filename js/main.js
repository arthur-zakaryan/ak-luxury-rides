const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const navScrim = document.getElementById('nav-scrim');

function closeNav(){
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded','false');
}
function toggleNav(){
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

navToggle.addEventListener('click', toggleNav);
navScrim.addEventListener('click', closeNav);
siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeNav));
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeNav(); });
