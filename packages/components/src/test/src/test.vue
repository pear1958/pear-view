<template>
  <div>Test - Vue</div>

  <div>
    <img :src="imageUrl" class="test-img" />
  </div>
</template>

<script lang="ts" setup>
import imageUrl from '@/assets/test1.png'

defineOptions({
  name: 'Test'
})
</script>
