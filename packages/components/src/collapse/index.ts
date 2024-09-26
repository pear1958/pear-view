import type { App } from 'vue'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

Collapse.install = (app: App) => {
  app.component(Collapse.name as string, Collapse)
}

CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name as string, CollapseItem)
}

export { Collapse, CollapseItem }

export default Collapse
