function scrolling(upSelector) {
  const upElem = document.querySelector(upSelector),
    element = document.documentElement,
    links = document.querySelectorAll('[href^="#"]'),
    speed = 0.09

  window.addEventListener('scroll', () => {
    if (element.scrollTop > 3020) {
      upElem.classList.add('animated', 'fadeIn')
      upElem.classList.remove('fadeOut')
    } else {
      upElem.classList.add('fadeOut')
      upElem.classList.remove('fadeIn')
    }
  })

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault()

      let heightTop = element.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null

      requestAnimationFrame(step)

      function step(time) {
        if (start == null) {
          start = time
        }

        let progress = time - start,
          r = (toBlock < 0 ? Math.max(heightTop - progress / speed, heightTop + toBlock) : Math.min(heightTop + progress / speed, heightTop + toBlock))

        element.scrollTo(0, r)

        if (r != heightTop + toBlock) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    })
  })
}

export { scrolling }