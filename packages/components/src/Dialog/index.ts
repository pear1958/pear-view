import type { App } from 'vue'
import Dialog from './src/Dialog.vue'

Dialog.install = (app: App) => {
  app.component(Dialog.name as string, Dialog)
}

export { Dialog }

export default Dialog
