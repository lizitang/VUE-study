# vue通信
- 父组件向子组件传值
- 子组件向父组件传值
- 非父子组件通信

## 父组件向子组件传值
- 使用props属性进行传值

#### 示例
父组件

```
<div id="c-box">
    这是父容器
    <componentD :changeState="changeState"></componentD>
    <button @click="changeFn">点击子组件的state值从0开始重新累加</button>
</div>
<script>
    import componentD from './d'
    export default {
        components: {
            componentD
        },
        data () {
            return {
                changeState: true
            }
        }
    }
</script>
```
子组件

```
props: ['changeState']
props: {
	changeState: Boolean
}
props: {
    changeState: {
        type: Boolean,
        default: [0,0,0] //这样可以指定默认的值
    }
}
```
**注意使用props属性，父组件可以给子组件传值，但是子组件不可以修改父组件给子组件传的值。**这里，子组件不可以修改changeState的值。这里需要通过子组件触发事件来通知父组件改变数据。

## 子组件向父组件传值
- 子组件内使用this.$emit('fn', data)

#### 示例
这里做一个小demo，子组件的state的值从0开始累加。父组件有一个按钮，点击按钮子组件的state值从0开始重新累加. 

父组件:

```
<template>
    <div id="c-box">
        这是父容器
        <componentD :changeState="changeState" @changeNum="getChangeNum"></componentD>
        <button @click="changeFn">点击子组件的state值从0开始重新累加</button>
    </div>
</template>
<script>
    import componentD from './d'
    export default {
        components: {
            componentD
        },
        data () {
            return {
                changeState: true
            }
        },
        methods: {
            changeFn: function () {
                this.changeState = false
            },
            getChangeNum: function (data) {
                this.changeState = data
            }
        },
        watch: {
            changeState: function (cul, old) {
                this.changeState = cul
            }
        }

    }
</script>
<style>
    #c-box {
        width: 500px;
        height: 500px;
        border: 1px solid #ccc;
        position: relative;
    }
</style>
```
子组件

```
<template>
    <div id="d-box">
        这是子组件
        <span>state:</span><span>{{number}}</span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                number: 0,
                timer: null,
                intervalFlag: true
            }
        },
        props: {
            changeState: Boolean
        },
        mounted: function () {
            this.setIntervalFn()
        },
        methods: {
            setIntervalFn: function () {
                this.$emit('changeNum', true)
                this.timer = setInterval(() => {
                    this.number++
                }, 1000)
            }
        },
        watch: {
            number: function (cul, old) {
                this.number = cul
            },
            changeState: function (cul, old) {
                this.number = 0
                clearInterval(this.timer)
                this.setIntervalFn()
            }
        }
    }
</script>
<style>
    #d-box {
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
        position: absolute;
        left: 100px;
        top: 100px;
    }
</style>
```
## 非父子组件传值
- 在根组件放空的vue实例，让所有的子组件都可以调用（这个作为一个中转站），对于不是父子组件的componentC和componentD。componentE调用事件触发(.$emit('fn',123))，componentE调用事件接收（.$on('fn',value => {})）

#### 示例
根组件

```
new Vue({
	router,
	el: '#app',
	data: {
		word: 'hello vue',
		Bus: new Vue()
	},
	components: {
		'my-header': myHeader
	},
	render: h => h(App)
});
```
componentC

```
<button @click="submit">提交</button>
submit: function () {
    this.$root.Bus.$emit('eventName', 123)
}
```
componentE

```
created () {
    this.$root.Bus.$on('eventName', value => {
        console.log(value)
    })
},
```



