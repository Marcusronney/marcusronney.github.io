
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.tech-category, .timeline-item, .project-card, .section-copy, .contact-section').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
