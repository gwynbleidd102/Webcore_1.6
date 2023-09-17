// скрипт для боковой менюшки
const body = document.body
const sidenavBlock = document.querySelector('.sidenav')
const burgerToggle = document.querySelector('.header__left-burger-btn')
const burgerClose = document.querySelector('.mobile-menu__back-btn')
const transparentBg = document.querySelector('.transparent-bg')

// клик по бургеру
burgerToggle.addEventListener('click', () => {
  sidenavBlock.classList.add('burger-toggle')
  transparentBg.classList.add('transparent-bg--visible')
  body.classList.add('no-scroll')
})

// скрытие меню
burgerClose.addEventListener('click', () => {
  sidenavBlock.classList.remove('burger-toggle')
  transparentBg.classList.remove('transparent-bg--visible')
  body.classList.remove('no-scroll')
})

//скрытие меню по клику на прозрачную облатсть
transparentBg.addEventListener('click', (event) => {
  if (sidenavBlock.contains(event.target)) {
    sidenavBlock.classList.remove('burger-toggle')
    transparentBg.classList.remove('transparent-bg--visible')
    body.classList.remove('no-scroll')
  }
})
