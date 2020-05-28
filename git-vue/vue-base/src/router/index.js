import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/index",
    component: index
  }
];

const router = new VueRouter({
  routes
});

export default router;
