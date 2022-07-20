import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/",
    component: () => import("@/views/button.vue"),
  },
  {
    name: "table",
    path: "/table",
    component: () => import("@/views/table.vue"),
  },
  {
    path: "/advert",
    name: "advert",
    component: () => import("../views/advait.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
