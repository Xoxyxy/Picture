function checkTextInputs(selector) {
  const textInputs = document.querySelectorAll(selector)
  textInputs.forEach(text => {
    text.addEventListener('keypress', event => {
      if (event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault()
      }
    })

    text.addEventListener('input', () => {
      if (text.value.match(/[^а-яё 0-9]/ig)) {
        text.value = ''
      }
    })
  })
}

export { checkTextInputs }