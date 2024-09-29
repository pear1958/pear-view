import { series } from 'gulp'
import run from '../utils/run'
import { componentPath } from '../utils/paths'

export const publishComponent = async () => {
  run('release-it', `${componentPath}/dist`)
}

export default series(async () => publishComponent())
