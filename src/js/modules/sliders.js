function sliders(slides, direction, prev, next) {
  const items = document.querySelectorAll(slides)
  let slideIndex = 1,
    paused = false

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = items.length
    }

    items.forEach(item => {
      item.classList.add('animated')
      item.classList.add('hide')
    })

    items[slideIndex - 1].classList.remove('hide')
  }

  function changeSlides(n) {
    showSlides(slideIndex += n)
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next)

    prevBtn.addEventListener('click', () => {
      changeSlides(-1)
      items[slideIndex - 1].classList.remove('fadeInRight')
      items[slideIndex - 1].classList.add('fadeInLeft')
    })

    nextBtn.addEventListener('click', () => {
      changeSlides(1)
      items[slideIndex - 1].classList.remove('fadeInLeft')
      items[slideIndex - 1].classList.add('fadeInRight')
    })
  } catch (error) { }

  function activateAnimation() {
    if (direction == 'vertical') {
      paused = setInterval(() => {
        changeSlides(1)
        items[slideIndex - 1].classList.add('fadeIn')
      }, 4000)
    } else {
      paused = setInterval(() => {
        changeSlides(1)
        items[slideIndex - 1].classList.remove('fadeInLeft')
        items[slideIndex - 1].classList.add('fadeInRight')
      }, 5000)
    }
  }

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })

  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation()
  })

  activateAnimation()
  showSlides(slideIndex)
}

export { sliders }