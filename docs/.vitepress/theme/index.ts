import DefaultTheme from 'vitepress/theme'
import PearViewUI from 'pear-view-ui'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(PearViewUI)
  }
}
