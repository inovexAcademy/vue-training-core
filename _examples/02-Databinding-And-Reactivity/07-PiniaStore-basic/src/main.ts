import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});

app.mount('#app');
