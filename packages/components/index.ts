import type { App, Component } from 'vue'
import * as components from './src'
import openDialog from './src/Dialog/src/openDialog'

// import '@/styles/index.scss'

export default {
  install: (app: App) => {
    for (const name in components) {
      // @ts-ignore
      app.component(name, components[name])
    }
  }
}

export * from './src/index'

export { openDialog }
