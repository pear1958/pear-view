import { series, parallel, src, dest } from 'gulp'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import delPath from '../utils/delpath'
import { componentPath } from '../utils/paths'
import run from '../utils/run'

export const removeDist = () => {
  return delPath(`${componentPath}/dist`)
}

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
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
