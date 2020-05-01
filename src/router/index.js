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
    path: "/register",
    name: "register",
    component: ()=>import("@/views/Register")
  },
  {
    path: "/",
    redirect:{name:'home'}
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: () => import("../components/Detail")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
