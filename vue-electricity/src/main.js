// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import AnalysisPage from './pages/detail/analysis'
import PublishPage from './pages/detail/publish'
import store from './store'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'count',
					component: CountPage
				},
				{
					path: 'forecast',
					component: ForecastPage
				},
				{
					path: 'analysis',
					component: AnalysisPage
				},
				{
					path: 'publish',
					component: PublishPage
				}
			]
		}
	]
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
