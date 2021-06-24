import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerList as routes } from './router-list'
import { RouterGuard, scrollBehavior } from './router-guard-behavior' //守卫和行为
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior



  
})

RouterGuard(router)

export default router
