const navBtn = document.querySelector('.navbar-toggler'),
  navEl = document.querySelector('.navbar'),
  dropdownBtnEls = document.querySelectorAll('.navbar .dropdown-toggle'),
  dropdownEls = document.querySelectorAll('.navbar .dropdown')

navBtn.addEventListener('click', (e) => navEl.classList.toggle('expanded'))

dropdownBtnEls.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener('click', (e) => {
    dropdownEls.forEach((dropdown) => dropdown.classList.remove('expanded'))

    e.target.parentElement.classList.toggle('expanded')
  })
})
