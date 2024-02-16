import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Airport from '../components/Airport.vue';
import Time from '../components/Time.vue';
import Road from '../components/Road.vue';
import Rent from '../components/Rent.vue';
import Ticket from '../components/Ticket.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/airport',
      name: 'airport',
      component: Airport
    },
    {
      path: '/road',
      name: 'road',
      component: Road
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
    {
      path: '/rent',
      name: 'rent',
      component: Rent
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket
    },
  ]
})

export default router
