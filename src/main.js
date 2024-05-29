import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(bootstrap);
app.mount('#app');