import type { App } from 'vue'
import Drawer from './src/drawer.vue'

Drawer.install = (app: App) => {
  app.component(Drawer.name as string, Drawer)
}

export { Drawer }
export default Drawer
