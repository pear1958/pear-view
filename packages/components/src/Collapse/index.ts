import type { App } from 'vue'
import Collapse from './src/Collapse.vue'
import CollapseItem from './src/CollapseItem.vue'

Collapse.install = (app: App) => {
  app.component(Collapse.name as string, Collapse)
}

CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name as string, CollapseItem)
}

export { Collapse, CollapseItem }

export default Collapse
