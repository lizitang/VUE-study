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
                timer: null
            }
        },
        props: {
            changeState: Number
        },
        mounted: function () {
            this.setIntervalFn()
        },
        methods: {
            setIntervalFn: function () {
                this.timer = setInterval(() => {
                    this.number++
                }, 1000)
            }
        },
        watch: {
            number: function (cul, old) {
                this.number = cul
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