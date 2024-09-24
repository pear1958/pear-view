import { createApp } from 'vue'
import App from './App.vue'

import PearView from '@pear-view/components'

const app = createApp(App)
app.use(PearView)
app.mount('#app')
