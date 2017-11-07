// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-router'
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter();
// Vue.component('my-header', {
// 	template: '<p>this is my header</p>'
// });
var myHeaderChild = {
	template: '<h1>this is my header child</h1>'
}
var myHeader = {
	template: '<p><my-header-child></my-header-child>my header</p>',
	components: {
		'my-header-child': myHeaderChild
	}
}
new Vue({
	router,
	el: '#app',
	data: {
		word: 'hello vue'
	},
	components: {
		'my-header': myHeader
	},
	render: h => h(App)
});