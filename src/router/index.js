import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home'

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/hero',
    name: 'hero',
    component: () => import('@/views/Overwatch.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;