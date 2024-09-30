<template>
  <div>Test - Vue</div>

  <div>
    <img :src="imageUrl" style="width: 500px; margin-top: 16px" />
  </div>
</template>

<script lang="ts" setup>
import imageUrl from '@/assets/test1.png'

defineOptions({
  name: 'Test'
})
</script>
