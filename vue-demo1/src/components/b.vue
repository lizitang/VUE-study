<template>
	<div>
		{{ haha }}
		<button @click="emitMyEvent">emit</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				haha: 'this is componentsB'
			}
		},
		methods: {
			emitMyEvent () {
				this.$emit('my-event', this.haha);
			}
		}
	}
</script>