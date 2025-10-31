import { createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title',
                    component: Detail,
                    props: true
                }
            ]
        },
    ],
});

export default router;