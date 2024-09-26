import { series, parallel, src, dest, type TaskFunction } from 'gulp'
import sassLang from 'sass'
import glupSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import delPath from '../utils/delpath'
import { componentPath } from '../utils/paths'
import run from '../utils/run'

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

// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export const build: TaskFunction = series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)

export default build
