<template>
    <div id="d-box">
        这是子组件
        <span>state:</span><span>{{number}}</span>
       
        <componentE></componentE>
    </div>
</template>
<script>
    import componentE from './e'
    export default {
        data () {
            return {
                number: 0,
                timer: null,
                intervalFlag: true
            }
        },
        components: {
            componentE
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