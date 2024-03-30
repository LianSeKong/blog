import Layout from "../layout";
export default [
  {
    path: "/",
    component: Layout,
  },
  {
    path: "Home",
    component: () => import("@/views/Home"),
    meta: {
      title: "Home",
    },
    children: [
      {
        path: "/articles",

      },
      {
        path: "/love",
        
      },
      {
        path: "/test",
        
      }

    ]
  },
  {
    path: "*",
    component: () => import("@/views/Error404"),
  },
];
