import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use(Pagination)

// Проверка ширины экрана
function initSwiper() {
  if (window.innerWidth <= 767) {
    new Swiper('.swiper', {
      modules: [Pagination],
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlied: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

// Инициализация Swiper при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initSwiper()
})

// Переинициализация Swiper при изменении размера экрана
window.addEventListener('resize', () => {
  // Уничтожаем существующий Swiper (если он был инициализирован)
  const swiperContainer = document.querySelectorAll('.swiper').forEach((swiperContainer) => {
    if (swiperContainer.swiper) {
      swiperContainer.swiper.destroy()
    }
  })

  // Переинициализируем Swiper при необходимости
  initSwiper()
})
