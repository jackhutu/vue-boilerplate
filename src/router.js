import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('components/Home/index')
const NotFound = () => import('components/NotFound')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // scrollBehavior: true,  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0) 
  }
  next()
})
export default router