const navBtn = document.querySelector('.navbar-toggler'),
  navEl = document.querySelector('.navbar')

navBtn.addEventListener('click', (e) => {
  navEl.classList.toggle('expanded')
})
