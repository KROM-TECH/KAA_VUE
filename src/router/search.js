const BookSearch = () => import("@/views/BookSearch.vue");

export default [
    {
        path: "/booksearch",
        name: "BookSearch",
        component: BookSearch
      },
]