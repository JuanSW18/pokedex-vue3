import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Search from "@/views/Search/Search.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
