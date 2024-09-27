import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export const isImgExt = (fileName: string) => {
  const suffixRegex =
    /\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|wmf|jpeg)$/
  return suffixRegex.test(fileName)
}

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
      entryRoot: '../components',
      outDir: ['./dist/es', './dist/lib'],
      tsconfigPath: './tsconfig.json'
    }),
    {
      name: 'style',
      // rullup插件钩子之一，允许在文件生成之前修改文件
      // 可以通过修改bundle 对象来改变即将生成的文件内容
      // 或者通过this.emitFile方法来发出额外的文件, 将覆盖原文件
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        // 将所有输出文件code中的.scss换成.css, 因为我们当时没有打包scss文件
        for (const key of keys) {
          const bundler = bundle[key]

          if (bundler.type === 'chunk') {
            bundler.code = bundler.code.replace(/\.scss/g, '.css')
          }
        }
      }
    }
  ],
  build: {
    // 避免 styles 文件夹被 buildComponent() 覆盖
    emptyOutDir: false, // 构建前清空输出目录
    minify: false,
    lib: {
      entry: './index.ts'
      // 通过cdn引入后的全局变量名称
      // name: 'pear-view',
      // 打包出来的文件名, 默认为package.json的name选项
      // fileName: 'pear-view',
    },
    rollupOptions: {
      external: ['vue', /\.scss/, '@pear-view/utils'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          // 打包后的文件名
          entryFileNames: chunkInfo => {
            const { name } = chunkInfo
            return isImgExt(name) ? name : name + '.mjs'
          },
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
