import Vue from 'vue'
import Router from 'vue-router'
import MyTable from '@/components/table/my-table'
import MyEdit from '@/components/edit/my-edit'
import MyReader from '@/components/readers/my-reader'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my-table',
      name: 'MyTable',
      component: MyTable
    },
    {
      path: '/my-edit',
      name: 'MyEdit',
      component: MyEdit
    },
    {
      path: '/my-reader',
      name: 'MyReader',
      component: MyReader
    }
  ]
})
