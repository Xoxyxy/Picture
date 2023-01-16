import { calcScroll } from './calcScroll'
let btnPressed = false

function modals() {
  const body = document.body,
    windows = document.querySelectorAll('[data-modal]')

  function bindModal(btnSelector, modalSelector, closeSelector, destroy = false) {
    const btn = document.querySelectorAll(btnSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll()

    function windowsHide() {
      windows.forEach(window => {
        window.classList.remove('show', 'fadedModals')
        window.classList.add('hide')
      })
    }

    function showModal(element) {
      windowsHide()

      element.classList.add('show', 'fadedModals')
      body.classList.add('modal-open')
      body.style.marginRight = scroll + 'px'
    }

    function hideModal(element) {
      windowsHide()

      element.classList.remove('show', 'fadedModals')
      body.classList.remove('modal-open')
      body.style.marginRight = ''
    }

    btn.forEach(btn => {
      btn.addEventListener('click', event => {
        if (event.target) event.preventDefault()
        if (destroy) event.target.remove()
        btnPressed = true
        showModal(modal)
      })
    })

    close.addEventListener('click', () => {
      hideModal(modal)
    })

    modal.addEventListener('click', event => {
      if (event.target && event.target == modal) {
        hideModal(modal)
      }
    })

    document.addEventListener('keydown', event => {
      if (event.code == 'Escape' && modal.classList.contains('show')) {
        hideModal(modal)
      }
    })
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display = false

      windows.forEach(window => {
        if (window.classList.contains('show')) {
          display = 'block'
        }
      })

      if (!display) {
        document.querySelector(selector).classList.add('show')
        body.classList.add('modal-open')
        const scroll = calcScroll()
        body.style.marginRight = scroll + 'px'
      }
    }, time)
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
        document.querySelector(selector).click()
      }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
  // showModalByTime('.popup-consultation', 60000)
  openByScroll('.fixed-gift')
}

export { modals }