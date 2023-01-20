import { postDate } from '../services/requests'

function forms(formSelector, inputSelector) {
  const form = document.querySelectorAll(formSelector),
    input = document.querySelectorAll(inputSelector),
    upload = document.querySelectorAll('[name="upload"]')

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
    spinner: './assets/img/spinner.gif',
    ok: './assets/img/ok.png',
    fail: './assets/fail.png'
  }

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots = null
      const arr = item.files[0].name.split('.')
      arr[0].length > 6 ? dots = '...' : dots = '.'
      const name = arr[0].substring(0, 6) + dots + arr[1]
      item.previousElementSibling.textContent = name
    })
  })

  form.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()

      const statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      form.parentNode.appendChild(statusMessage)

      form.classList.add('animated', 'fadeOut')
      setTimeout(() => {
        form.classList.add('hide')
      }, 400)

      const statusImg = document.createElement('img')
      statusImg.setAttribute('src', message.spinner)
      statusImg.classList.add('animated', 'fadeIn')
      statusMessage.append(statusImg)

      const textMessage = document.createElement('div')
      textMessage.innerText = message.loading
      statusMessage.appendChild(textMessage)

      const formData = new FormData(form)
      let api = null
      form.closest('.popup-design') || form.classList.contains('calc-form') ? api = path.designer : api = path.question

      postDate(api, formData)
        .then(result => {
          console.log(result)
          statusImg.setAttribute('src', message.ok)
          statusMessage.textContent = message.success
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail)
          statusMessage.textContent = message.failure
        })
        .finally(() => {
          input.forEach(input => {
            input.value = ''
          })
          document.querySelector('textarea').value = ''
          upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
          })
          setTimeout(() => {
            statusMessage.remove()
            form.classList.remove('hide')
            form.classList.remove('fadeOut')
            form.classList.add('fadeIn')
          }, 5000)
        })
    })
  })
}

export { forms }