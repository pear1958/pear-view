import * as components from '../src/index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Button: typeof components.Button
    Collapse: typeof components.Collapse
    CollapseItem: typeof import('../src/collapse/src/collapse-item.vue')['default']
    Dialog: typeof components.Dialog
    Loading: typeof components.Loading
    Drawer: typeof components.Drawer
    Tabs: typeof components.Tabs
    Test: typeof components.Test
    TestVue: typeof components.TestVue
  }
}

export {}
