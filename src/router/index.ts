import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main.vue"),
  },
  {
    path: "/:pathMath(.*)*",
    name: "notFound",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const menu: any = window.localStorage.getItem("menu");
    const flag = JSON.parse(menu);
    if (!flag) return "/login";
  }
});
export default router;
