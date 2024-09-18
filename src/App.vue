<template>
  <div style="padding: 16px">
    <div>
      <Collapse v-model="openedValue">
        <CollapseItem name="a" title="Consistency">
          <div>11111111111</div>
          <div>11111111111</div>
          <div>11111111111</div>
        </CollapseItem>

        <CollapseItem name="b" title="Feedback">
          <div>2222222222222</div>
          <div>2222222222222</div>
          <div>2222222222222</div>
        </CollapseItem>

        <CollapseItem name="c" title="Efficiency" disabled>
          <div>33333333333333</div>
          <div>33333333333333</div>
          <div>33333333333333</div>
        </CollapseItem>
      </Collapse>
    </div>

    <div style="margin-top: 30px">
      <Loading />
    </div>

    <div>
      <Button type="primary" @click="toggle">打开对话框</Button>

      <div style="margin-top: 16px">
        <Button type="primary" @click="showDialog">函数式调用对话框</Button>
      </div>

      <Dialog v-model:visible="visible" title="测试标题" :handleOk="handleOk" :cancel="cancel">
        <template v-slot:content>
          <p>第一行</p>
          <p>第二行</p>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapseItem, Loading, Dialog, openDialog, Button } from './'

defineOptions({
  name: 'TestApp'
})

const openedValue = ref(['a'])

const visible = ref(false)

const toggle = () => {
  visible.value = true
}

const handleOk = () => {
  console.log('确认')
  return true
}

const cancel = () => {
  console.log('取消')
}

const showDialog = () => {
  openDialog({
    title: '标题',
    content: '这里是内容',
    visible: true,
    handleOk: () => {
      console.log('确认')
    },
    cancel: () => {
      console.log('取消')
    }
  })
}
</script>

<style scoped></style>
