import type { App } from 'vue'
import Collapse, { CollapseItem } from './src/Collapse'
import Loading from './src/Loading'
import Dialog, { openDialog } from './src/Dialog'
import Button from './src/Button'

// import '@/styles/index.scss'

const components = [Collapse, CollapseItem, Loading, Dialog, Button]

const install = (app: App) => {
  components.forEach(compoment => {
    app.component(compoment.name as string, compoment)
  })
}

export default {
  install
}

export { install, Collapse, CollapseItem, Loading, Dialog, openDialog, Button }
