import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Home from '@/pages/index.vue'
import SilenceWarnHack from '@/test/SilenceWarnHack'

const silenceWarnHack = new SilenceWarnHack()

describe('Index.vue', () => {
  let localVue

  beforeEach(() => {
    silenceWarnHack.enable()
    localVue = createLocalVue()
    localVue.use(Vuetify)
    silenceWarnHack.disable()
  })

  it('renders "Olá, mundo!" when passed', () => {
    const message = 'Olá, mundo!'
    const wrapper = mount(Home, {
      localVue
    })

    const title = wrapper.find('.col > .hello')

    expect(title.text()).toMatch(message)
  })
})
