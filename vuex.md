# vuex的整理
## vuex是什么
专门为vue.js应用程序开发的**状态管理模式**
![](imgs/02.png)

- state 存放共享数据
- view 视图
- Actions 在view上用户的行为需要同步修改state中的共享数据，这里就是响应view上的用户输入导致的变化

在实际的操作中，会遇到如下情况：
> 多个视图依赖于同一状态  
> 来自不同视图的用户行为需要变更同一个状态。

这样，我们提出将**组件的共享状态**抽取出来，以**全局单例模式**进行管理。其数据响应机制如下图所示：
![](imgs/03.png)

**在这里需要知道的一个重点是：**

- state:存放共享数据，组件可以共享使用这个数据。可以通过,mapState获取或者this.$store.state来获取，这里如果是多个数据需要获取，建议用mapState；
- mutations:可以改变state里的共享数据，写成方法的形式，组件中不可以直接调用，需要actions里的方法来调用；
- actions:调用mutations里的方法，在组件中，想要修改state的值，可以通过import mapActions。


**下面详细介绍一下vuex的核心概念：**
### State
**单一状态树**就是存放一些数据，这些数据在很多组件中可能都需要。  
Vuex通过store选项，将该机制从根组件注入到每一个组件中，在store/index.js里需要调用Vue.use(Vuex)。  

**这样在每个组件中都可以获取store的方法有三种：**
  
- 直接使用this.$store.state.count来获取
- 在组件中import store from '~common/store/'，然后使用store.state.count来获取
- import {mapState} from '~common/store/' ,组件里使用computed:mapState(['aa','bb'])

#### 示例
首先使用vuex时，新建一个store文件夹。在该文件夹里有一个index.js文件。   

```js
//在main.js里引用
import store from '~common/store/'

//store/index.js里
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
	count
}
export default new Vuex.Store({
    state,
    actions,
	 mutations
})
```
### Getter
可以理解为对state里的数据进行一个计算得到新的值，这个值可能在多个组件中会经常用到，那我们就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，只有当它的依赖值发生改变才会重新计算。其可以通过不同的方式进行访问，具体可以看[vue文档](https://vuex.vuejs.org/zh/guide/getters.html)。
### Mutation
**更改Vuex的store中的状态的唯一方法就是提交mutation**每一个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)。
**更改vuex的store中的状态就mutations中更改**

```
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const COMPUTE_SCORE = 'COMPUTE_SCORE'
export default {
    [ADD_ITEMNUM](state) {
        if (state.itemNum < state.itemDetail.length - 2) {
            state.itemNum++
        } else if (state.itemNum < state.itemDetail.length - 1){
            state.itemNum++
            state.isShow = false
        }
    },
    [COMPUTE_SCORE](state, chooseIndex) {
        if (state.itemDetail[state.itemNum].topic_answer[chooseIndex].is_standard_answer === 1) {
            state.score += 20 
        }
    }
}
```
调用mutations的函数，需要调用**store.commit('increment')**
```
mutations: {
	increment (state,n) {
	  // 变更状态
	  state.count++
	}
}
store.commit('increment', 10)
```
**Mutation必须同步执行**
### Action
**Action可以接受异步操作**它提交的是mutation，它不直接更改状态。
action函数内可以接受一个与store实例具有相同方法和属性的context对象，在这个action函数内可以通过调用context.commit来提交mutation，或者通过context.state和context.getters获取到state和getters的值

```
//action.js
export default {
    addNum({commit, state}) {
        commit('ADD_ITEMNUM')
    },
    computeScore({commit, state}, chooseIndex) {
        commit('COMPUTE_SCORE', chooseIndex)
    }
}
```
在Actions可以进行异步操作，在组件中调用actions里的方法，就可以使用**this.$store.dispatch**。




