import type { App } from 'vue'
import Test from './src/Test'
import TestVue from './src/Test.vue'

Test.install = (app: App) => {
  app.component(Test.name as string, Test)
}

TestVue.install = (app: App) => {
  app.component(TestVue.name as string, TestVue)
}

export { Test, TestVue }
export default Test
