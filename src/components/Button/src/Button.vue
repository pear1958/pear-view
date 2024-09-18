<template>
  <div class="btn">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Button'
})
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 12px;
  border: 1px solid var(--pear-primary);
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
}
</style>
