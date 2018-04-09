import Vue from 'vue'
import Router from 'vue-router'
import AppDetail from '@/view/layout/AppDetail'
import NewHouse from '@/view/newHouse/NewHouse'
import ArticleIndex from '@/view/article/ArticleIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appDetail',
      component: AppDetail,
      children: [
        { path: 'newhouse', name: 'newhouse', component: NewHouse },
        { path: 'article', name: 'article', component: ArticleIndex }
      ]
    }
  ]
})
