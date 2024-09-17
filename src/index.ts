import type { App } from 'vue'
import Collapse, { CollapseItem } from '@/components/collapse'
import Loading from './components/loading'
import Dialog, { openDialog } from './components/dialog'

import '@/styles/index.scss'

const components = [Collapse, CollapseItem, Loading, Dialog]

const install = (app: App) => {
  components.forEach(compoment => {
    app.component(compoment.name, compoment)
  })
}

export default {
  install
}

export { install, Collapse, CollapseItem, Loading, Dialog, openDialog }
