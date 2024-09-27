<template>
  <div class="btn" :class="buttonClass">
    <slot />
    <div>
      <img :src="imageUrl" class="test-img" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import '../../styles/index.scss'
import '../../styles/button.scss'
import imageUrl from '../../assets/test1.png'
import { test2 } from '@pear-view/utils'

test2()

defineOptions({
  name: 'Button'
})

type ButtonProps = {
  type?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonClass = computed(() => {
  return { [`btn--${buttonProps.type}`]: !!buttonProps.type }
})
</script>
