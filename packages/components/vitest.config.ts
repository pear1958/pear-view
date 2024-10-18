import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types')
    }
  },
  test: {
    environment: 'jsdom',
    // 启用 vitest-ui
    reporters: ['html'],
    // 在 ui 中添加 覆盖率报告 按钮
    coverage: {
      provider: 'v8',
      enabled: true
    }
  },
  plugins: [vue(), vueJsx()]
})
