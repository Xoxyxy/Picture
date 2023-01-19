import { getResource } from '../services/requests'

function showMore(btnSelector, wrapperSelector) {
  const btn = document.querySelector(btnSelector),
    wrapper = document.querySelector(wrapperSelector)

  btn.addEventListener('click', event => {
    const loader = document.createElement('img')
    loader.src = './assets/img/spinner.gif'
    loader.style.display = 'block'
    loader.style.margin = '0 auto'
    wrapper.append(loader)

    getResource('assets/db.json')
      .then(res => {
        loader.remove()
        renderCards(res.styles)
      })
      .catch(err => console.log(err))
    event.target.remove()
  })

  function renderCards(resp) {
    resp.forEach(({ src, title, link }) => {
      const card = document.createElement('div')
      card.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

      card.innerHTML = `
      <div class=styles-block>
        <img src=${src} alt="Карточка">
        <h4>${title}</h4>
        <a href="${link}">Подробнее</a>
      </div>
      `
      wrapper.append(card)
    })
  }
}

export { showMore }