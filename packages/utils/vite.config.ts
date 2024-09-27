import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      entryRoot: '../utils',
      outDir: ['./dist/es', './dist/lib'],
      tsconfigPath: './tsconfig.json'
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: './index.ts',
      // 通过cdn引入后的全局变量名称
      name: 'PearUtils'
    },
    rollupOptions: {
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/es') // 配置打包根目录
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/lib')
        }
      ]
    }
  }
})
