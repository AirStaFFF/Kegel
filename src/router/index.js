import Vue from 'vue'
import VueRouter from 'vue-router'
import Kegel from '../views/Kegel'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Kegel',
    component: Kegel
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
