import { createApp } from 'vue'
import App from './App.vue'

import vClickOutside from "click-outside-vue3";

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(vClickOutside);

AOS.init();

app.mount('#app');
