import type { App } from 'vue'
import Dialog from './src/Dialog.vue'
import openDialog from './src/openDialog'

Dialog.install = (app: App) => {
  app.component(Dialog.name, Dialog)
}

export { openDialog }

export default Dialog
