export default [
  {
    path: "/main/product/category",
    name: "category",
    component: () => import("@/views/product/category.vue"),
  },
  {
    path: "/main/product/goods",
    name: "goods",
    component: () => import("@/views/product/goods.vue"),
  },
];
