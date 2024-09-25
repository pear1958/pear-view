import * as components from './index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Button: typeof components.Button
    Collapse: typeof components.Collapse
    CollapseItem: typeof import('./Collapse/src/CollapseItem.vue')['default']
    Dialog: typeof components.Dialog
    Loading: typeof components.Loading
    Test: typeof components.Test
    TestVue: typeof components.TestVue
  }
}
export {}
