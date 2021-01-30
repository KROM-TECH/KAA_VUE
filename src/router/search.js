const BookSearch = () => import("@/views/book/BookSearch.vue");

export default [
    {
        path: "/booksearch",
        name: "BookSearch",
        component: BookSearch
      },
]