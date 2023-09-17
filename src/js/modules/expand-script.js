// поворот стрелки
function rotateArrow(button) {
  const arrow = button.querySelector('.expand-arrow')
  arrow.classList.toggle('expand-arrow--rotate')
}

// фукнция для кнопки "читать далее"
const aboutText = document.querySelector('.about__info-text')
const readmoreBtn = document.getElementById('about__info-expand-btn')
const readmoreBtnText = readmoreBtn.querySelector('.about__info-expand-btn-text')
let isExpandedAbout = false

readmoreBtn.addEventListener('click', () => {
  aboutText.classList.toggle('about__info-text--readmore')
  rotateArrow(readmoreBtn)

  isExpandedAbout = !isExpandedAbout

  if (isExpandedAbout) {
    readmoreBtnText.textContent = 'Свернуть'
  } else {
    readmoreBtnText.textContent = 'Читать далее'
  }
})

// функция для кнопки "показать всё" у слайдеров

const brandsSwiperWrapper = document.querySelector('.brands__swiper-wrapper')
const techSwiperWrapper = document.querySelector('.tech__swiper-wrapper')
const expandBrands = document.getElementById('expand-brands')
const expandTech = document.getElementById('expand-tech')
const expandBrandsText = expandBrands.querySelector('.expand-btn-text')
const expandTechText = expandTech.querySelector('.expand-btn-text')

let isExpandedBrands = false // Отдельная переменная для кнопки expandBrands
let isExpandedTech = false

expandBrands.addEventListener('click', () => {
  brandsSwiperWrapper.classList.toggle('brands__swiper-wrapper--all-slides')
  rotateArrow(expandBrands)

  isExpandedBrands = !isExpandedBrands

  if (isExpandedBrands) {
    expandBrandsText.textContent = 'Скрыть'
  } else {
    expandBrandsText.textContent = 'Показать всё'
  }
})

expandTech.addEventListener('click', () => {
  techSwiperWrapper.classList.toggle('tech__swiper-wrapper--all-slides')
  rotateArrow(expandTech)

  isExpandedTech = !isExpandedTech

  if (isExpandedTech) {
    expandTechText.textContent = 'Скрыть'
  } else {
    expandTechText.textContent = 'Показать всё'
  }
})
