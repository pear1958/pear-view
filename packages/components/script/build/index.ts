import { series, parallel, src, dest, type TaskFunction } from 'gulp'
import sassLang from 'sass'
import glupSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import delPath from '../utils/delpath'
import { componentPath } from '../utils/paths'
import run from '../utils/run'

// 我们需要使用 ts 以及新的 es6 语法, 而 gulp 是不支持的
// 所以我们需要安装一些依赖使得 gulp 支持这些, 其中 sucrase 让我们执行 gulp 可以使用最新语法并且支持 ts

export const removeDist = () => {
  return delPath(`${componentPath}/dist`)
}

const sass = glupSass(sassLang)

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/styles/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/es/src/styles`))
    .pipe(dest(`${componentPath}/dist/lib/src/styles`))
}

// 拷贝静态资源
export const buildImg = () => {
  return src(`${componentPath}/src/assets/**/*`, { encoding: false })
    .pipe(dest(`${componentPath}/dist/es/src/assets`))
    .pipe(dest(`${componentPath}/dist/lib/src/assets`))
}

// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export const build: TaskFunction = series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildImg(),
    async () => buildComponent()
  )
)

export default build
