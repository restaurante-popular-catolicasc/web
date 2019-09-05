import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'

import SilenceWarnHack from '../../SilenceWarnHack'
import Home from '@/views/Home.vue'

const silenceWarnHack = new SilenceWarnHack()

describe('Home.vue', () => {
  let localVue

  beforeEach(() => {
    silenceWarnHack.enable()
    localVue = createLocalVue()
    localVue.use(Vuetify)
    silenceWarnHack.disable()
  })

  it('renders "Hello, world!" when passed', () => {
    const msg = 'Hello, world!'
    const wrapper = mount(Home, {
      localVue
    })

    const title = wrapper.find('.col > .hello')

    expect(title.text()).toMatch(msg)
  })
})
