import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Home
  },

  {
    path: "/overwatch",
    name: "overwatch",
    component: () => import("@/views/Overwatch.vue")
  },
  {
    path: "/PUBG",
    name: "PUBG",
    component: () => import("@/views/PUBG.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: () => import("../components/Detail")
  },
  {
    path: "/contribute",
    name: "contribute",
    component: () => import("@/views/contribute.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
