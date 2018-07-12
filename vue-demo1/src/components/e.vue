<template>
    <div>
        hello
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        created () {
            this.$root.Bus.$on('eventName', value => {
                console.log(value)
            })
        },
        methods: {
            
        }
    }
</script>