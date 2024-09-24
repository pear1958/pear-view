<template>
  <div
    class="collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div
      class="collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <!-- <Icon icon="ep:arrow-right" class="header-angle" /> -->
      <span>x</span>
    </div>

    <Transition name="slide" v-on="transitionEvents">
      <div class="collapse-item__wrapper" v-show="isActive">
        <div class="collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
// import { Icon } from '@iconify/vue'
import { collapseContextKey } from './types'

defineOptions({
  name: 'CollapseItem'
})

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))

const handleClick = () => {
  if (props.disabled) {
    return
  }

  collapseContext?.handleItemClick(props.name)
}

// 使用 opacity 可以实现 fade 的效果, 因此可以使用CSS
// 但是我们要实现滑动的效果(需要动态修改高度, 实时高度只有通过Js才能获取到)
// 因此使用 JsApi
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  // 在元素被插入到 DOM 之前被调用
  // 用这个来设置元素的 "enter-from" 状态
  beforeEnter(el) {
    el.style.height = '0px' // 添加动画效果
    el.style.overflow = 'hidden' // 展开时, 超出隐藏 (padding-bottom会超出)
  },
  // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画  此时 display 为 true
  enter(el) {
    // 不知道元素的实际高度是多少, 因此动态设置
    // 父节点的高度   collapse-item__wrapper
    el.style.height = `${el.scrollHeight}px`
  },
  // 当进入过渡完成时调用。
  // 删除内联样式 -> 恢复原值
  afterEnter(el) {
    el.style.height = '' // 置空 == 失效
    el.style.overflow = ''
  },
  beforeLeave(el) {
    // 不设置此行  则元素收起的时候没有折叠的效果
    el.style.height = `${el.scrollHeight}px`
    // 在高度从有到无得一瞬间, 避免闪烁
    el.style.overflow = 'hidden'
  },
  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  leave(el) {
    el.style.height = '0px'
  },
  // 恢复原值
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>
