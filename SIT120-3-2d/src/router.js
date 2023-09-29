import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/home.vue';
import Projects from './components/projects.vue';
import Contact from './components/contact.vue';
import AdminLogin from './components/AdminLogin.vue'
import BlogPage from './components/BlogPage.vue'
import Resume from './components/Resume.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact-us', component: Contact },
  { path: '/adminlogin', component: AdminLogin},
  { path: '/blog', component: BlogPage},
  { path: '/resume', component: Resume},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
