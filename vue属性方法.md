# vue属性方法
### computed和methods
**将同一个函数定义为方法或者计算属性都可以实现计算的结果，但是使用计算属性更好，因为计算属性只有在它的相关依赖发生改变时才会重新计算，这里计算属性就相当于有一个缓存的效果**
```
<div>{{reserverMessage}}</div>
<div>{{reverseM()}}</div>
computed: {
    reserverMessage: function () {
        return this.message.split('').reverse().join('');
    }
},
methods: {
    reverseM: function () {
        return this.message.split('').reverse().join('');                    
    }
}
```
### v-if和v-show
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。  

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。  

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。  

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。  

v-if处理后的dom元素消失了，v-show处理后的元素还在dom元素中，相当于display:none  

## v-on 事件修饰符
> 在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
- .stop v-on:click.stop阻止事件传播
- .prevent v-on:submit.prevent阻止重新加载页面
- .capture v-on:cllick.capture 元素自身触发的事件先处理，再交由其内部元素进一步处理
- .self v-on:click.self 只当在 event.target 是当前元素自身时触发处理函数
- .once
- .passive 不阻止浏览器的默认行为

## vue组件
在vue组件中，data不是一个对象，而是函数。这里是为了当组件复用多次时，一个组件的值的改变不会影响到其他组件的值，函数内值的改变是在自己的作用域内。
```
//在组件内：
data: function () {
    return {
        count: 0
    }
},
//在非组件内是：
data: {
    count: 0
}
```
### 全局注册组件
```
Vue.component('my-component', {
    data: function () {
        return {

        }
    },
    template: ''
})
```
### 局部注册组件
```
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
new Vue({
  el: '#app'
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```