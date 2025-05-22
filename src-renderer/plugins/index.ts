/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../stores'
import router from './router'
// Composables
import { createApp } from 'vue'
import type { Component } from 'vue'

// Styles
import 'unfonts.css'

export function registerPlugins(component: Component) {
  const app = createApp(component)
  app.use(vuetify).use(router).use(pinia)

  app.mount('#app')
}
