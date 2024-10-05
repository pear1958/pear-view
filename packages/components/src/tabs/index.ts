import type { App } from 'vue'
import Tabs from './src/tabs.vue'
import TabItem from './src/tab-item'

Tabs.install = (app: App) => {
  app.component(Tabs.name as string, Tabs)
}

TabItem.install = (app: App) => {
  app.component(TabItem.name as string, TabItem)
}

export { Tabs, TabItem }
export default Tabs
