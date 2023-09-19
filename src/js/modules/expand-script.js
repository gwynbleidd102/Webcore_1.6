const aboutText = document.querySelector('.about__info-text')
const readmoreBtn = document.querySelector('.about__info-expand-btn')
const readmoreBtnText = readmoreBtn.querySelector('.about__info-expand-btn-text')
const brandsSwiperWrapper = document.querySelector('.brands__swiper-wrapper')
const expandBrands = document.querySelector('.expand-brands')
const expandBrandsText = expandBrands.querySelector('.expand-btn-text')
const techSwiperWrapper = document.querySelector('.tech__swiper-wrapper')
const expandTech = document.querySelector('.expand-tech')
const expandTechText = expandTech.querySelector('.expand-btn-text')

function showAll(wrapper, btn, btnText, expadndingClass) {
  wrapper.classList.toggle(expadndingClass)
  rotateArrow(btn)

  if (wrapper.classList.contains(expadndingClass)) {
    btnText.textContent = 'Скрыть'
  } else {
    if (wrapper === aboutText) {
      btnText.textContent = 'Читать далее'
    } else {
      btnText.textContent = 'Показать всё'
    }
  }
}

function rotateArrow(button) {
  const arrow = button.querySelector('.expand-arrow')
  arrow.classList.toggle('expand-arrow--rotate')
}

expandBrands.addEventListener('click', () => {
  showAll(brandsSwiperWrapper, expandBrands, expandBrandsText, 'brands__swiper-wrapper--all-slides')
})

expandTech.addEventListener('click', () => {
  showAll(techSwiperWrapper, expandTech, expandTechText, 'tech__swiper-wrapper--all-slides')
})

readmoreBtn.addEventListener('click', () => {
  showAll(aboutText, readmoreBtn, readmoreBtnText, 'about__info-text--readmore')
})
