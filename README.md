# VUE-study
## Vue
v-text  
v-html   
v-bind:属性绑定  v-bind:href="" 缩写 :href="" ，可以绑定class     
v-on: 事件绑定  v-on:click 缩写 @click    
条件渲染：  
v-if:如果不满足，就不会存在在dom节点中  
v-show：如果不满足条件，依旧在dom节点中，只是display:none   
v-else 与v-if相反    
v-model  表单的数据双向绑定  
v-for 

```
<p v-for="(item, index) in list" :class="{odd: index%2}">{{item.name}}-{{item.price}}-{{index}}</p>
<p v-for="(value, key) in objList">{{key}} - {{value}}</p>
```
数组更新:

1. 可以触发视图更新的方法：

	- push()
	- pop()
	- shift()
	- unshift()
	- splice()
	- sort()
	- reverse()
2. 不能触发视图更新的方法
	- concat()
	- slice()
	- filter()
	- 直接利用索引更改某一项
	- 直接修改索引的长度
	
针对已经创建的实例，Vue不能直接动态添加根级别的响应式属性，但是可以使用Vue.set(object, key, value)方法向嵌套对象添加响应式属性

```
Vue.set(this.list, 1, {
        name: 'orange',
        price: 16
      })
this.list[1] = {
	name: 'orange',
	price: 16
}//这种方式不可以，可以通过Vue.set()来修改
```
	
引入子组件

```
import componentA from './components/a'  
components: {
    componentA: componentA
  },
```
父子组件通信：
  
- 子组件向父组件传递
在子组件里：
  
```
<button @click="emitMyEvent">emit</button>
methods: {
	emitMyEvent () {
		this.$emit('my-event', this.haha);
	}
}
```
父组件里：

```
<componentB @my-event="onComaMyEvent"></componentB>
```
vm.$emit()接收两个参数，第一个是父组件的事件名称，第二个参数是传参数。
 
 - 父组件向子组件传递数据  
	props:接收来自父组件的数据，可以是数组也可以是对象


computed  计算属性  
watch  监听属性变化  

## Vue-cli
### 优点：
1. 成熟的vue项目架构设计
2. 本地测试服务器
3. 集成打包上线的方案

### 安装  
> npm install vue-cli -g 安装  
vue init webpack my-project 初始化项目  
npm install 安装项目依赖  
npm run dev  在本地启动测试服务器  
npm run build 生成上线目录(部署)
>

### vue-router


