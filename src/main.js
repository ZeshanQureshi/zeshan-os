import { createApp } from 'vue'
import App from './App.vue'

import vClickOutside from "click-outside-vue3";
import drag from "v-drag"

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(vClickOutside);

app.use(drag);

AOS.init();

app.mount('#app');
