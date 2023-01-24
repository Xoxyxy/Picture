function burger(menuSelector, burgerSelector) {
  const menu = document.querySelector(menuSelector),
    burger = document.querySelector(burgerSelector)

  menu.classList.add('hide')

  burger.addEventListener('click', () => {
    if (window.screen.availWidth < 993) {
      menu.classList.toggle('hide')
      menu.classList.toggle('show')
    }
  })

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menu.classList.add('hide')
      menu.classList.remove('show')
    }
  })
}

export { burger }