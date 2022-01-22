import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] =
    [{
        path: '/',
        component: () => import('../templates/Layout.vue'),
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import('../pages/Home.vue')
            }
        ]
    }];

export default routes;