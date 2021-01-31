const bookindex = () => import("@/views/book/Book.vue");

export default [
 
      {
        path: "/bookindex",
        name: "bookindex",
        component: bookindex
      },
]