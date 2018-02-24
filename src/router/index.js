import Vue from 'vue'
import Router from 'vue-router'
import AppDetail from '@/components/AppDetail'
import SourceIndex from '@/components/SourceIndex'
import ArticleIndex from '@/components/ArticleIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appDetail',
      component: AppDetail,
      children: [
        {path: 'source', name: 'source', component: SourceIndex},
        {path: 'article', name: 'article', component: ArticleIndex}
      ]
    }
  ]
})
