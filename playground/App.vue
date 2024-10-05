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
      <Button type="primary" @click="dialogVisible = true">打开对话框</Button>

      <div style="margin-top: 16px">
        <Button type="primary" @click="showDialogByFunc">函数式调用对话框</Button>
      </div>

      <Dialog
        v-model:visible="dialogVisible"
        title="测试标题"
        :handleOk="handleOk"
        :cancel="cancel"
      >
        <template v-slot:content>
          <p>第一行</p>
          <p>第二行</p>
        </template>
      </Dialog>
    </div>

    <div class="mt-10">
      <Test />
      <TestVue />
    </div>

    <div class="mt-10">
      <Tabs v-model:selected="title">
        <TabItem title="体育新闻">体育新闻-xxxxxxxxx</TabItem>
        <TabItem title="财经新闻">财经新闻-yyyyyyyyy</TabItem>
        <TabItem title="普通新闻">普通新闻-zzzzzzzzz</TabItem>
      </Tabs>
    </div>

    <div class="mt-10">
      <Button @click="drawerVisible = true" type="primary">打开Drawer</Button>

      <Drawer v-model="drawerVisible" title="抽屉组件">
        <template #title>
          <h4>这是一段标题</h4>
        </template>

        <div v-for="item in 120">这是一段内容</div>
        <div>底部内容</div>

        <template #footer>
          <Button @click="drawerVisible = false">取消</Button>
          <Button type="primary" @click="drawerVisible = false">确定</Button>
        </template>
      </Drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Collapse,
  CollapseItem,
  Loading,
  Dialog,
  openDialog,
  Button,
  Test,
  TestVue,
  Tabs,
  TabItem,
  Drawer
} from 'pear-view-ui'

const openedValue = ref(['a'])

const dialogVisible = ref(false)

const handleOk = () => {
  console.log('确认')
  return true
}

const cancel = () => {
  console.log('取消')
}

const showDialogByFunc = () => {
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

const title = ref('体育新闻')
const drawerVisible = ref(false)
</script>

<style scoped>
.mt-10 {
  margin-top: 10px;
}
</style>
