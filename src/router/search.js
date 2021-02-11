const BookSearch = () => import("@/views/book/BookSearch.vue");
const VideoSearch = () => import("@/views/video/VideoSearch.vue");

export default [
    {
        path: "/booksearch",
        name: "BookSearch",
        component: BookSearch
      },
    {
        path: "/videosearch",
        name: "VideoSearch",
        component: VideoSearch
      },
]