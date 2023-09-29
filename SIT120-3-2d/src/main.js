import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

const app = createApp(App);

const sharedState = {
    isLoggedIn: false, // Initialize with false
  };
  
app.config.globalProperties.$sharedState = sharedState;

app.use(router).mount('#app');
