import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AllPostsView from "@/views/posts/AllPostsView.vue";
import CreatePostView from "@/views/posts/CreatePostView.vue";
import SigninView from "@/views/auth/SigninView.vue";
import SignupView from "@/views/auth/SignupView.vue";
import PostView from "@/views/posts/PostView.vue";
import DraftsView from "@/views/DraftsView.vue";
import UpdatePostView from "@/views/posts/UpdatePostView.vue";

import { auth } from "@/firebase/config";

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  let user = auth.currentUser;

  if (!user) {
    next({ name: "Signup" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/all-posts/",
    name: "AllPosts",
    component: AllPostsView,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePostView,
    beforeEnter: requireAuth,
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
  {
    path: "/post/:id",
    name: "Post",
    component: PostView,
    props: true,
  },
  {
    path: "/drafts",
    name: "Drafts",
    component: DraftsView,
  },
  {
    path: "/update-post/:id",
    name: "UpdatePost",
    component: UpdatePostView,
    props: true,
    beforeEnter: requireAuth,
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
