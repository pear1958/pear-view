import type { App } from 'vue'
import Loading from './src/loading.vue'

Loading.install = (app: App) => {
  app.component(Loading.name as string, Loading)
}

export { Loading }

export default Loading
