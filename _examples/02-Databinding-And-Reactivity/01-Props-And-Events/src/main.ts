import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueScan, { type VueScanOptions } from 'z-vue-scan';

const app = createApp(App);

const isScan =
  document.location.search.includes('scan=true') ||
  document.location.search.includes('scan=1');

app.use<VueScanOptions>(VueScan, {
  enable: isScan,
  displayDuration: 700,
  fadeOutDuration: 400,
});

app.mount('#app');
