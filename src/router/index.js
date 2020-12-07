import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
const Book= () => import("@/views/Book.vue");
const Video= () => import("@/views/Video.vue");


Vue.use(VueRouter);

const routes = [
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
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
