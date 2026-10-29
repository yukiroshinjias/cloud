// Кнопка «наверх» в правом нижнем углу — появляется после прокрутки
(() => {
  const b = document.createElement('button');
  b.className = 'totop';
  b.type = 'button';
  b.setAttribute('aria-label', 'Наверх');
  b.textContent = '↑';
  b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(b);
  const toggle = () => b.classList.toggle('show', window.scrollY > 400);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
})();
