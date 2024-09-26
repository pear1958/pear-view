import { series, parallel, src, dest } from 'gulp'
import glupSass from 'gulp-sass'
import sassLang from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import delPath from '../utils/delpath'
import { componentPath } from '../utils/paths'
import run from '../utils/run'

export const removeDist = () => {
  return delPath(`${componentPath}/dist`)
}

// 打包样式
export const buildStyle = () => {
  const sass = glupSass(sassLang)

  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/es/src`))
    .pipe(dest(`${componentPath}/dist/lib/src`))
}

// 打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)
