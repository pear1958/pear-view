<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="dialog-mask" @click="clickMask" v-show="visible"></div>
    </Transition>

    <Transition :name="!alignCenter ? 'dialog' : 'dialog-y'">
      <div class="dialog" :style="styles" v-bind="$attrs" v-if="visible">
        <header>
          <slot name="title" v-if="slots.title" />
          <span class="title" v-else>{{ title }}</span>

          <span class="close-icon" @click="closeDialog">
            <Icon icon="ep:close" />
          </span>
        </header>

        <main>
          <slot name="content" />
        </main>

        <footer>
          <Button @click="cancel">取消</Button>
          <Button type="primary" @click="handleOk" style="margin-left: 12px">确认</Button>
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style'

defineOptions({
  name: 'Dialog'
})

const emit = defineEmits(['update:visible'])

const slots = useSlots()

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  closeOnClickMask: {
    type: Boolean,
    default: true
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: 800
  },
  top: {
    type: [String, Number],
    default: 130
  },
  handleOk: {
    type: Function
  },
  cancel: {
    type: Function
  }
})

const styles = computed(() => ({
  minWidth: props.width + 'px',
  top: props.top + 'px',
  ...(props.alignCenter ? { top: '50%', transform: 'translate(-50%, -50%)' } : {})
}))

const closeDialog = () => {
  emit('update:visible', false)
}

const clickMask = () => {
  if (props.closeOnClickMask) {
    closeDialog()
  }
}

const cancel = () => {
  props.cancel && props.cancel()
  closeDialog()
}

const handleOk = () => {
  props.handleOk && props.handleOk()
  closeDialog()
}
</script>

<style lang="scss" scoped>
@import './dialog.scss';
</style>
