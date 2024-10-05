<template>
  <Transition name="fade">
    <div class="mask" v-if="modelValue && showMask" @click="close()"></div>
  </Transition>

  <Transition name="drawer">
    <div
      class="drawer"
      :class="{ show: modelValue }"
      :style="{ width: width + 'px' }"
      v-bind="$attrs"
      v-if="modelValue"
    >
      <div class="header">
        <div class="title">
          <slot name="title" v-if="slots.title" />
          <div v-else>{{ title }}</div>
        </div>

        <Icon icon="ep:close" class="close-icon" @click="close" />
      </div>

      <div class="body">
        <!-- <el-scrollbar> -->
        <div class="content-box">
          <slot />
        </div>
        <!-- </el-scrollbar> -->
      </div>

      <div class="footer">
        <slot name="footer" v-if="slots.footer" />

        <template v-else>
          <Button @click="cancel">取消</Button>
          <Button type="primary" @click="confirm" style="margin-left: 12px">确定</Button>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
import { Icon } from '@iconify/vue'
// @ts-ignore
import Button from '@/button'
import '@/styles/drawer.scss'

defineOptions({
  name: 'Drawer'
})

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  width: {
    type: Number,
    default: 422
  },
  title: {
    type: String,
    default: ''
  },
  showMask: {
    type: Boolean,
    default: true
  }
})

const slots = useSlots()

const emit = defineEmits(['update:modelValue', 'beforeClose', 'close', 'confirm'])

const close = () => {
  emit('beforeClose')
  emit('update:modelValue', false)
  emit('close')
}

const cancel = () => {
  close()
}

const confirm = () => {
  close()
  emit('confirm')
}
</script>
