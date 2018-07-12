<template>
    <div id="c-box">
        这是父容器
        <componentD :changeState="changeState" @changeNum="getChangeNum"></componentD>
        <button @click="changeFn">点击子组件的state值从0开始重新累加</button>
        <button @click="submit">提交</button>
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
            },
            submit: function () {
                this.$root.Bus.$emit('eventName', 123)
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