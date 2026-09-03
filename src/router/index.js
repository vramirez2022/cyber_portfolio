import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Adjust path if Home.vue is in src/pages/ or src/components/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
