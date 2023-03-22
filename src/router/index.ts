import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import CreatePost from "@/views/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/post/:id",
    name: "PostView",
    component: PostView,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
