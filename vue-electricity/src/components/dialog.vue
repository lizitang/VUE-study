<template>
	<div>
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-cover"></div>
			<div class="dialog-content">
				<p class="dialog-close" @click="closeMyself">x</p>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {

			}
		},
		methods: {
			closeMyself () {
				this.$emit('on-close');
			}
		}
	}
</script>
<style>
	.dialog-wrap {
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.dialog-cover {
		background-color: #000;
		opacity: 0.3;
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.dialog-content {
		width: 50%;
		position: fixed;
		max-height: 50%;
		overflow: auto;
		top: 20%;
		left: 50%;
		margin-left: -25%;
		z-index: 10;
		border: 2px solid #464068;
		padding: 2%;
		background-color: #fff;
	}
	.dialog-close {
		position: absolute;
		right: 5px;
		top: 5px;
		cursor: pointer;
	}
</style>