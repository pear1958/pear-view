<template>
  <div class="btn" :class="buttonClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import '../../styles/button.scss'

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
