import { modals } from './modules/modals'
import { sliders } from './modules/sliders'
import { forms } from './modules/forms'
import { mask } from './modules/mask'
import { checkTextInputs } from './modules/checkTextInputs'
import { showMore } from './modules/showMore'
import { calculator } from './modules/calculator'
import { filter } from './modules/filter'
import { picture } from './modules/picture'
import { accordion } from './modules/accordion'
import { burger } from './modules/burger'

document.addEventListener('DOMContentLoaded', () => {
  modals()
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
  sliders('.main-slider-item', 'vertical')
  forms('form', 'input')
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
  mask('[name="phone"]')
  showMore('.button-styles', '#styles .row')
  calculator('#size', '#material', '#options', '.promocode', '.calc-price')
  filter()
  picture('.sizes-block')
  accordion('.accordion-heading')
  burger('.burger-menu', '.burger')
}) 