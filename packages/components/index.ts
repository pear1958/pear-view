import type { App } from 'vue'
import * as components from './src'

export default {
  install: (app: App) => {
    Object.keys(components).forEach(name => {
      app.component(name, components[name])
    })
  }
}

export * from './src'
export { default as openDialog } from './src/dialog/src/openDialog'
