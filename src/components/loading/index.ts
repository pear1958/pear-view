import type { App } from 'vue'
import loading from './src/loading.vue'

loading.install = (app: App) => {
  app.component(loading.name, loading)
}

export default loading
