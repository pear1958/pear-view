import type { App } from 'vue'
import Button from './src/Button.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
