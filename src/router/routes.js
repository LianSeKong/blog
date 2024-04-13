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
        name: 'article',
        component: () => import("@/views/Articles"),
        props($route){
          return {
            page: +$route.query.page || 1,
            limit: +$route.query.limit || 10,
            id: +$route.params.id || -1
          }
        },
        meta: {
          icon: 'article',
          title: '文章',
          isShow: true
        }
      },
      {
        path: "articles/cate/:id",
        name: 'category',
        component: () => import("@/views/Articles"),
        props($route){
          return {
            page: +$route.query.page || 1,
            limit: +$route.query.limit || 10,
            id: +$route.params.id || -1
          }
        },
        meta: {
          icon: 'article',
          title: '文章',
          isShow: false
        }
      },
      {
        path: "articles/detail/:id",
        name: 'category',
        component: () => import("@/views/Articles/blogDetail.vue"),
        meta: {
          icon: 'article',
          title: '文章详情',
          isShow: false
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
