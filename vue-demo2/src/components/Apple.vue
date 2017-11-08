<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<button @click="getParam">get param</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg: 'hello I am an apple'
			}
		},
		methods: {
			getParam () {
				console.log(this.$route.params);
			}
		}
	}
</script>