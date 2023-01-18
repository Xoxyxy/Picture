import { modals } from './modules/modals'
import { sliders } from './modules/sliders'
import { forms } from './modules/forms'
import { checkTextInputs } from './modules/checkTextInputs'

document.addEventListener('DOMContentLoaded', () => {
  modals()
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
  sliders('.main-slider-item', 'vertical')
  forms('form', 'input')
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
}) 