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

const contactForm = document.getElementById('contact-form');
const formStatus = contactForm.querySelector('.form-status');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.textContent = '';
  formStatus.className = 'form-status';
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    const res = await fetch('https://formsubmit.co/ajax/reservations@akluxuryrides.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
    });
    const data = await res.json();

    if (res.ok && data.success !== false) {
      formStatus.textContent = 'Request sent — we’ll confirm your reservation shortly.';
      formStatus.classList.add('is-success');
      contactForm.reset();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    formStatus.textContent = 'Something went wrong. Please call or email us directly.';
    formStatus.classList.add('is-error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Request';
  }
});
