import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/common.css'

import "vuetify/styles/main.css"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import "cesium/Build/Cesium/Widgets/widgets.css"

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
