function filter() {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no')

  function btnElem(selector) {
    return menu.querySelector(selector)
  }

  function markElem(selector) {
    return wrapper.querySelectorAll(selector)
  }

  function typeFilter(markType) {
    markAll.forEach(mark => {
      mark.classList.add('hide')
      mark.classList.remove('show', 'animated', 'fadeIn')
    })
    no.classList.add('hide')
    no.classList.remove('show', 'animated', 'fadeIn')

    if (markType) {
      markType.forEach(mark => {
        mark.classList.remove('hide')
        mark.classList.add('show', 'animated', 'fadeIn')
      })
    } else {
      no.classList.remove('hide')
      no.classList.add('show', 'animated', 'fadeIn')
    }
  }

  function addEventsToBtn(btn, mark) {
    btn.addEventListener('click', () => {
      typeFilter(mark)
    })
  }

  menu.addEventListener('click', event => {
    const target = event.target
    if (target && target.tagName == 'LI') {
      items.forEach(item => {
        item.classList.remove('active')
      })
      target.classList.add('active')
    }
  })

  addEventsToBtn(btnElem('.all'), markAll)
  addEventsToBtn(btnElem('.lovers'), markElem('.lovers'))
  addEventsToBtn(btnElem('.chef'), markElem('.chef'))
  addEventsToBtn(btnElem('.girl'), markElem('.girl'))
  addEventsToBtn(btnElem('.guy'), markElem('.guy'))
  addEventsToBtn(btnElem('.grandmother'))
  addEventsToBtn(btnElem('.granddad'))
}

export { filter }