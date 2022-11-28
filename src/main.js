import { createApp } from 'vue'
import App from './App.vue'

import VueSweetAlert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const elementApp = createApp(App);

elementApp.use(VueSweetAlert2);

elementApp.mount('#app')
