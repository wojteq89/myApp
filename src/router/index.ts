import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import CarDetails from '@/views/CarDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        name: 'CarLists',
        component: () => import('@/views/CarList.vue')
      },
      {
        path: 'tab2',
        name: 'CarTips',
        component: () => import('@/views/CarTips.vue')
      },
      {
        path: 'tab3',
        name: 'Favorites',
        component: () => import('@/views/Favorites.vue')
      }
    ]
  },
  {
    path: '/car/:name',
    name: 'CarDetails',
    component: CarDetails,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
