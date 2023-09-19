const body = document.body
const container = document.querySelector('.container')

let activeModal = null // Переменная для хранения активной модалки

const modalCall = document.querySelector('.modal-call')
const transparentBg = modalCall.querySelector('.transparent-bg')
const modalFeedback = document.querySelector('.modal-feedback')
const transparentBg2 = modalFeedback.querySelector('.transparent-bg')
const modalCallBtns = document.querySelectorAll('.modal-call-toggle')
const modalFeedbackBtns = document.querySelectorAll('.modal-feedback-toggle')

modalCallBtns.forEach(function (element) {
  element.addEventListener('click', function () {
    closeModal() // Закрыть активную модалку, если она есть
    modalCall.classList.add('modal--active')
    body.classList.add('no-scroll')
    transparentBg.classList.add('transparent-bg--visible')
    activeModal = modalCall // Устанавливаем активной текущую модалку
  })
})

modalFeedbackBtns.forEach(function (element) {
  element.addEventListener('click', function () {
    closeModal()
    modalFeedback.classList.add('modal--active')
    body.classList.add('no-scroll')
    transparentBg2.classList.add('transparent-bg--visible')
    activeModal = modalFeedback
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
  transparentBg.classList.remove('transparent-bg--visible')
  transparentBg2.classList.remove('transparent-bg--visible')
  activeModal = null
}

;[transparentBg, transparentBg2].forEach((bgElement) => {
  bgElement.addEventListener('click', () => {
    closeModal()
  })
})
