import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
const Book = () => import("@/views/book");
const Video = () => import("@/views/video/Video.vue");
const Article = () => import("@/views/article/Article.vue");
const Upload = () => import("@/views/Upload.vue");
const Guide = () => import("@/views/Guide.vue");
const Request = () => import("@/views/Request.vue");
import searchRoutes from './search.js'
import indexRoutes from './main.js'

Vue.use(VueRouter);

const routes = [
  ...searchRoutes,
  ...indexRoutes,
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/book",
    name: "Book",
    component: Book
  },

  {
    path: "/video",
    name: "Video",
    component: Video
  },
  {
    path: "/article",
    name: "Article",
    component: Article
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide
  },
  {
    path: "/request",
    name: "Request",
    component: Request
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
