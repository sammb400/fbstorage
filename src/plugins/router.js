import { createRouter, createWebHistory } from 'vue-router'

const routes =[
    {path: '/', name: 'home', component: ()=> import('../views/Home.vue')},
    {path: '/details', name: 'details', component: ()=> import('../views/Details.vue')},
    {path: '/sched', name: 'schedule', component: ()=> import('../views/Details.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  })


export default router