import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '@/components/login/my-login'
import MyRegist from '@/components/regist/my-regist'
import MyTable from '@/components/table/my-table'
import MyEdit from '@/components/edit/my-edit'
import MyReader from '@/components/readers/my-reader'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/my-table'
    },
    {
      path: '/my-login',
      name: 'MyLogin',
      component: MyLogin
    },
    {
      path: '/my-regist',
      name: 'MyRegist',
      component: MyRegist
    },
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
