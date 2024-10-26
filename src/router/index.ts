import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

interface RouteMeta {
  title: string;
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home - POS' }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = (to.meta.title as string) || 'POS';
  document.title = title;
  next();
});

export default router;
