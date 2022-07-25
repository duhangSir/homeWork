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
  {
    path: "/form",
    name: "form",
    component: () => import("../views/Form.vue"),
  },
  
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/Upload.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
