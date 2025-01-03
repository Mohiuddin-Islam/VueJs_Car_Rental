
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CarlistPage from '@/views/CarlistPage.vue'
import FaqPage from '@/views/FaqPage.vue'
import ContactPage from '@/views/ContactPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      
    },
    {
      path: '/carlist',
      name: 'carlist',
      component: CarlistPage,
      
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage,
      
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      
    },
    
  ],
})

export default router
