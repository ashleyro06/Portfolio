import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(router)
app.use(store)

import './assets/styles/colors.css'
import './assets/styles/fonts.css'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
app.use(PrimeVue)

import Tag from 'primevue/tag'
app.component('Tag', Tag)
import Tooltip from 'primevue/tooltip'
app.directive('tooltip', Tooltip)
import Galleria from 'primevue/galleria'
app.component('Galleria', Galleria)

app.mount('#app')
