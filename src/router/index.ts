import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AllPosts from "@/views/AllPostsView.vue";
import CreatePostView from "@/views/CreatePostView.vue";
import SigninView from "@/views/auth/SigninView.vue";
import SignupView from "@/views/auth/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/all-posts/",
    name: "AllPosts",
    component: AllPosts,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePostView,
  },
  {
    path: "/signin",
    name: "Signin",
    component: SigninView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
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
