<template>
	<div class="add-container">
		<span class="reduce" @click="mimus">-</span><input class="num" type="text" v-model="buyNum" @keyup="fixNum"></span><span class="add" @click="add">+</span>
	</div>
</template>
<script>
	export default {
		props:{
			max: {
				type: Number,
				default: 10
			},
			min: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				buyNum: this.min
			}
		},
		methods: {
			mimus () {
				if (this.buyNum <= this.min) {
					this.buyNum = this.min;
				} else {
					this.buyNum--;
				}
			},
			add () {
				if (this.buyNum >= this.max) {
					this.buyNum = this.max
				} else {
					this.buyNum++;
				}
			},
			fixNum () {
				let fix;
				if (typeof this.buyNum === 'string') {
					fix = Number(this.buyNum.replace(/\D/g, ''));
				} else {
					fix = this.buyNum;
				}
				if (fix > this.max || fix < this.min) {
					fix = this.min;
				}
				this.buyNum = fix;
			}
		},
		watch: {
			buyNum () {
				this.$emit('on-computed', this.buyNum);
			}
		}
 	}
</script>
<style>
	.add-container {
		float: left;
	}
	.add-container span {
		float: left;
		width: 30px;
		text-align: center;
		height: 24px;
		line-height: 24px;
		border: 1px solid #e3e3e3;
	}
	.num {
		float: left;
		outline: none;
		border: 1px solid #e3e3e3;
		width: 40px;
		height: 24px;
		line-height: 24px;
		text-align: center;
	}
	.add-container span:hover {
		cursor: pointer;
	}
</style>