function picture(imgSelector) {
  const blocks = document.querySelectorAll(imgSelector)

  function showImg(block) {
    const img = block.querySelector('img')
    img.src = img.src.slice(0, -4) + '-1.png'
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.classList.add('hide')
    })
  }

  function hideImg(block) {
    const img = block.querySelector('img')
    img.src = img.src.slice(0, -6) + '.png'
    block.querySelectorAll('p').forEach(p => {
      p.classList.remove('hide')
    })
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block)
    })
    block.addEventListener('mouseout', () => {
      hideImg(block)
    })
  })
}

export { picture }