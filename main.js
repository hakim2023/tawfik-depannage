// Mobile menu
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

function setMenu(open) {
  nav.classList.toggle('is-open', open)
  burger.setAttribute('aria-expanded', String(open))
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu')
}

burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')))
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

document.getElementById('year').textContent = new Date().getFullYear()
