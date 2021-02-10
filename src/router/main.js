const BookIndex = () => import("@/views/book/Book.vue");
const VideoIndex = () => import("@/views/video/video.vue");

export default [
 
      {
        path: "/bookindex",
        name: "BookIndex",
        component: BookIndex
      },
      {
        path: "/videoindex",
        name: "VideoIndex",
        component: VideoIndex
      },
]