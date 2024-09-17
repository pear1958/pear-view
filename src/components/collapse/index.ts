import type { App } from 'vue'
import collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

collapse.install = (app: App) => {
  app.component(collapse.name, collapse)
}

CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name, CollapseItem)
}

export default collapse

export { CollapseItem }

export * from './src/types'
