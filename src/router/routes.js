import Layout from "../layout";
export default [
  {
    path: "/",
    component: Layout,
    meta: {
      isShow: false
    },
    redirect: 'home',
    children: [
      {
        path: "home",
        name: 'home',
        component: () => import("@/views/Home"),
        meta: {
          icon: 'home',
          title: '首页',
          isShow: true
        }
      },
      {
        path: "articles",
        name: 'articles',
        component: () => import("@/views/Articles"),
        meta: {
          icon: 'article',
          title: '文章',
          isShow: true
        }
      },
      {
        path: "message_board",
        name: 'message_board',
        component: () => import("@/views/MessageBoard"),
        meta: {
          icon: 'Dog',
          title: '留言板',
          isShow: true
        },
      },
      {
        path: "about_me",
        name: 'about_me', 
        component: () => import("@/views/AboutMe"),
        meta: {
          icon: 'about-me',
          title: '关于我',
          isShow: true
        },
      }
    ]
  },
  {
    path: "*",
    component: () => import("@/views/Error404"),
    meta: {
      isShow: false
    },
  },
];
