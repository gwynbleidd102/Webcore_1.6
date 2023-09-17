const body = document.body
const container = document.querySelector('.container')

let activeModal = null // Переменная для хранения активной модалки

const modalCall = document.querySelector('.modal-call')
const transparentBg = modalCall.querySelector('.transparent-bg')
const modalFeedback = document.querySelector('.modal-feedback')
const transparentBg2 = modalFeedback.querySelector('.transparent-bg')

const modalCallBtns = document.querySelectorAll('.modal-call-toggle')
modalCallBtns.forEach(function (element) {
  element.addEventListener('click', function () {
    closeModal() // Закрыть активную модалку, если она есть
    modalCall.classList.add('modal--active')
    body.classList.add('no-scroll')
    transparentBg.classList.add('transparent-bg--visible')
    activeModal = modalCall // Устанавливаем активной текущую модалку
  })
})

const modalFeedbackBtns = document.querySelectorAll('.modal-feedback-toggle')
modalFeedbackBtns.forEach(function (element) {
  element.addEventListener('click', function () {
    closeModal() // Закрыть активную модалку, если она есть
    modalFeedback.classList.add('modal--active')
    body.classList.add('no-scroll')
    transparentBg2.classList.add('transparent-bg--visible')
    activeModal = modalFeedback // Устанавливаем активной текущую модалку
  })
})

const modalClose = document.querySelectorAll('.modal__close')
modalClose.forEach(function (element) {
  element.addEventListener('click', () => {
    closeModal()
  })
})

function closeModal() {
  if (activeModal) {
    activeModal.classList.remove('modal--active')
  }
  body.classList.remove('no-scroll')
  // transparentBg.classList.remove('transparent-bg--visible')
  transparentBg.classList.remove('transparent-bg--visible')
  transparentBg2.classList.remove('transparent-bg--visible')
  activeModal = null // Очищаем активную модалку
}

;[transparentBg, transparentBg2].forEach((bgElement) => {
  bgElement.addEventListener('click', () => {
    closeModal()
  })
})

// transparentBg.addEventListener('click', () => {
//   closeModal()
// })

// transparentBg2.addEventListener('click', () => {
//   closeModal()
// })
