import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../'

describe('测试组件', () => {
  const wrapper = mount(Button, {
    props: {
      type: 'primary'
    },
    slots: {
      default: '文本'
    }
  })

  it('props', () => {
    expect(wrapper.text()).toContain('文本')
  })

  it('slot', () => {
    expect(wrapper.classes()).toContain('pear-button-primary')
  })
})
