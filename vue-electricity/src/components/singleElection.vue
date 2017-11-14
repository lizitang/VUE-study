<template>
	<ul class="single-container">
		<li v-for="(item, index) in singleList" :class="{selected: index === nowIndex}" @click="changeIndex(index)">{{ item.name }}</li>
	</ul>
</template>
<script>
	export default {
		props: {
			singleList: {
				type: Array,
				default: [
					{
						name: '0',
						value: 0
					},
					{
						name: '1',
						value: 1
					},
					{
						name: '2',
						value: 2
					}
				]
			}
		},
		data () {
			return {
				nowIndex: 0
			}
		},
		methods: {
			changeIndex (index) {
				this.nowIndex = index;
				this.$emit('on-single', this.nowIndex);
			}
		}
	}
</script>
<style scoped>
	.single-container {
		float: left;
	}
	.single-container li {
		float: left;
		margin-right: 10px;
		width: 40px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid #e3e3e3;
	}
	.single-container li:hover {
		cursor: pointer;
	}
	.selected {
		background-color: #ccc;
		color: #fff;
	}
</style>