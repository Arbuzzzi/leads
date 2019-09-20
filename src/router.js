import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

import goTo from 'vuetify/lib/components/Vuetify/goTo'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('./views/Home.vue')
    // },
  ]
})

export default router
