<template>
    <div id="c-box">
        这是父容器
        <componentD :changeState="changeState"></componentD>
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