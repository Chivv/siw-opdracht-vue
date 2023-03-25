import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.css"
import "./assets/css/style.css"


// Import SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// import { createStore } from 'vuex'
import store from './vuex';





import router from './router'

import './axios.js'

// const app = createApp(App)

// app.use(router)
// app.use(VueSweetalert2)
// app.use(store)
// app.mount('#app')
createApp(App)
    .use(router)
    .use(VueSweetalert2)
    .use(store)
    .mount('#app')

