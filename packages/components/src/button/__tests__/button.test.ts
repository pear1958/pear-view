import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import button from '..'

describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'easyest'
      }
    })
    expect(wrapper.text()).toContain('easyest')
  })

  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('pear-button-primary')
  })
})
