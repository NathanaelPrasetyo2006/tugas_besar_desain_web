import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import MenuPage from '@/components/MenuPage.vue'
import OrderPage from '@/components/OrderPage.vue'
import KPPPage from '@/components/KP&PPage.vue'
import SKPage from '@/components/S&KPage.vue'
import KPrivasiPage from '@/components/KPrivasiPage.vue'
import AboutMe from '@/components/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'beranda',
    component: HomePage,
  },
  {
    path: '/tentangkami',
    name: 'tentang kami',
    component: AboutPage,
  },
  {
    path: '/produk',
    name: 'produk',
    component: MenuPage,
  },
  {
    path: '/carapesan',
    name: 'cara pesan',
    component: OrderPage,
  },
  {
    path: '/kebijakanpengembaliandanpembatalan',
    name: 'kebijakan pengembalian dan pembatalan',
    component: KPPPage,
  },
  {
    path: '/syaratdanketentuan',
    name: 'syarat dan ketentuan',
    component: SKPage,
  },
  {
    path: '/kebijakanprivasi',
    name: 'kebijakan privasi',
    component: KPrivasiPage,
  },
  {
    path: '/aboutme',
    name: 'about me',
    component: AboutMe,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
