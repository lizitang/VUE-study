<template>
	<ul class="choose-container">
		<li  v-for="(item, index) in chooseList" @click="chooseItem(index)" :class="{selected: isChoose(index)}">{{ item.name }}</li>
	</ul>
</template>
<script>
	export default {
		props: {
			chooseList: {
				type: Array,
				default: [{
					name: '1个月',
					value: 0
				}]
			}
		},
		data () {
			return {
				chooseResult: [0]
			}
		},
		methods: {
			chooseItem (index) {
				let indx = this.chooseResult.indexOf(index);
				if (indx === -1) {
					this.chooseResult.push(index);
				} else {
					this.chooseResult.splice(indx, 1);
				}
				this.$emit('on-choose', this.chooseResult);
			},
			isChoose (index) {
				return this.chooseResult.indexOf(index) !== -1;
			}
		}
	}
</script>
<style scoped>
	.choose-container {
		float: left;
	}
	.choose-container li {
		float: left;
		margin-right: 10px;
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid #e3e3e3;
	}
	.choose-container li:hover {
		cursor: pointer;
	}
	.selected {
		background-color: #ccc;
		color: #fff;
	}
</style>
