import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: 'src',
      outDir: ['./dist/es/src', './dist/lib/src'],
      tsconfigPath: '../../tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]
          // rollup内置方法, 将所有输出文件code中的.scss换成.css, 因为我们当时没有打包scss文件
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, '.css')
          })
        }
      }
    }
  ],
  build: {
    // 避免打包style文件夹被覆盖
    emptyOutDir: false,
    lib: {
      entry: './index.ts'
      // // 通过cdn引入后的全局变量名称
      // name: 'pear-view',
      // // 打包出来的文件名, 默认为package.json的name选项
      // fileName: 'pear-view',
    },
    rollupOptions: {
      external: ['vue', /\.scss/],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          // 打包后的文件名
          entryFileNames: '[name].mjs',
          preserveModules: true, // 让打包目录和我们目录对应
          exports: 'named', // https://cn.rollupjs.org/configuration-options/#output-exports
          dir: './dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: './dist/lib'
        }
      ]
    }
  }
})
