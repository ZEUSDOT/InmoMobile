import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Register from '@/views/Auth/Register.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Auth/Register.vue')
  },
  {
    path: '/casa-asmedas',
    name: 'asmedas',
    component: () => import('@/views/Casas/CasaAsmedas.vue')
  },
  // Ruta miranda
  {
    path: '/ruta-miranda',
    name: 'miranda',
    component: () => import('@/views/Rutas/RutaMiranda.vue')
  },
  {
    path: '/ruta-neiva',
    name: 'neiva',
    component: () => import('@/views/Rutas/RutaNeiva.vue')
  },
  {
    path: '/ruta-darien',
    name: 'darien',
    component: () => import('@/views/Rutas/RutaDarien.vue')
  },
  {
    path: '/ruta-sucre',
    name: 'sucre',
    component: () => import('@/views/Rutas/RutaSucre.vue')
  },
  {
    path: '/ruta-moore',
    name: 'moore',
    component: () => import('@/views/Rutas/RutaMoore.vue')
  },
  {
    path: '/ruta-uraba',
    name: 'uraba',
    component: () => import('@/views/Rutas/RutaUraba.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'explore',
        name: 'explore',
        component: () => import('@/views/Explore.vue')
      },
      {
        path: 'map-explore',
        name: 'map-explore',
        component: () => import('@/views/MapExplore.vue')
      },
      {
        path: 'operation',
        component: () => import('@/views/Operation.vue')
      },
      {
        path: 'integral',
        component: () => import('@/views/Integral.vue')
      },
      {
        path: 'cultural',
        component: () => import('@/views/Cultural.vue')
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
