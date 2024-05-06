import './assets/main.css'

import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createPinia } from 'pinia'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { all } from '@awesome.me/kit-a0908caae4/icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

library.add(all)

app.
  component('fa-icon', FontAwesomeIcon).
  use(createPinia()).
  use(router).
  use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
      }
    })
  ).
  mount('#app')
