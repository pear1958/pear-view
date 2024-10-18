import type { App } from 'vue'
import Button from './src/button.vue'

Button.install = (app: App) => {
  app.component(Button.name as string, Button)
}

export { Button }
export default Button
