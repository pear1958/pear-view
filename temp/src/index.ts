import type { App } from 'vue'
import Collapse, { CollapseItem } from './components/Collapse'
import Loading from './components/Loading'
import Dialog, { openDialog } from './components/Dialog'
import Button from './components/Button'

import '@/styles/index.scss'

const components = [Collapse, CollapseItem, Loading, Dialog, Button]

const install = (app: App) => {
  components.forEach(compoment => {
    app.component(compoment.name, compoment)
  })
}

export default {
  install
}

export { install, Collapse, CollapseItem, Loading, Dialog, openDialog, Button }
