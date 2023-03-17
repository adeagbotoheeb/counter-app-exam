import { createWebHashHistory, createRouter } from 'vue-router';


import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/counter', name: 'Counter', component: Counter },
    {path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;