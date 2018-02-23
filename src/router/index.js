import Vue from 'vue'
import Router from 'vue-router'
import AppDetail from '@/components/AppDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appDetail',
      component: AppDetail
    }
  ]
})
