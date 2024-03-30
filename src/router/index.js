import VueRouter from "vue-router";
import Vue from "vue";
import routes from './routes'
Vue.use(VueRouter);

const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes
})

export default router;