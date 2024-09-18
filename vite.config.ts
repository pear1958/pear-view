import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 一款用于在 库模式 中从 .ts(x) 或 .vue 源文件生成类型文件（*.d.ts）的 Vite 插件
import dts from 'vite-plugin-dts'
import fg from 'fast-glob'

const pathSrc = resolve(__dirname, 'src')

const root = 'src'

const files = await fg.glob('**/*.{js,ts,vue}', {
  cwd: root,
  absolute: true,
  onlyFiles: true
})

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  server: {
    open: true,
    host: true,
    port: 3377
  },
  plugins: [
    vue(),
    vueJsx(),
    // 默认情况, 生成的类型文件会跟随源文件的结构
    dts({
      // tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  build: {
    lib: {
      // entry: resolve(__dirname, 'src/index.ts'),
      entry: files,
      // 通过cdn引入后的全局变量名称  eg: 引入 EP cdn后, app.use(ElementPlus)
      // eg: https://element-plus.org/zh-CN/guide/installation.html#hello-world
      // name: 'PearView',
      // 打包出来的文件名, 默认为package.json的name选项
      // fileName: 'pear-view',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', '@iconify/vue'],
      output: {
        // 修改css名称, 默认打包出来的css文件名称为 style.css
        assetFileNames: chunkInfo => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        },
        preserveModules: true,
        preserveModulesRoot: root,
        exports: 'named'
      }
    }
  }
})
