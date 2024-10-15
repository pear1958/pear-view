import * as components from '../src/index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Collapse: typeof components.Collapse
    CollapseItem: typeof import('../src/collapse/src/collapse-item.vue')['default']
    Dialog: typeof components.Dialog
    Loading: typeof components.Loading
    Drawer: typeof components.Drawer
    Tabs: typeof components.Tabs
  }
}

export {}
