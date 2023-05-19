import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
const AllPostsView = () => import("@/views/posts/AllPostsView.vue");
const CreatePostView = () => import("@/views/posts/CreatePostView.vue");
const SigninView = () => import(/* webpackChunkName: "register" */ "@/views/auth/SigninView.vue");
const SignupView = () => import(/* webpackChunkName: "register" */ "@/views/auth/SignupView.vue");
const PostView = () => import("@/views/posts/PostView.vue");
const DraftsView = () => import("@/views/DraftsView.vue");
const UpdatePostView = () => import("@/views/posts/UpdatePostView.vue");

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
    path: "/all-posts/:tag?",
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
