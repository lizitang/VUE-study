<template>
	<div class="carouse-box" @mouseover="stopMove" @mouseout="move">
		<div class="carouse-content">
			<a :href="carouseSrc[nowIndex].href">
				<transition name="fade-old">
					<img v-if="isShow" :src="carouseSrc[nowIndex].src" alt="" class="1">
				</transition>
				<transition name="fade">
					<img v-if="!isShow" :src="carouseSrc[nextIndex].src" alt="">
				</transition>
			</a>
		</div>
		<h2 class="img-title">{{ carouseSrc[nowIndex].title }}</h2>
		<ul class="carouse-pages">
			<li v-for="(item, index) in carouseSrc" @click="goto(index)" :class="{selected: index === nowIndex}">{{ index + 1}}</li>
		</ul>
		<div class="carouse-btns">
			<span class="prev-btn" @click="goto(prevIndex)">&lt;</span><span class="next-btn" @click="goto(nextIndex)">&gt;</span>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			carouseSrc: {
				type: Array,
				default: []
			},
			inv: {
				type: Number,
				default: 1000
			}
		},
		data () {
			return {
				nowIndex: 0,
				isShow: true
			}
		},
		methods: {
			goto (index) {
				this.isShow = false;
				setTimeout(() => {
					this.isShow = true;
					this.nowIndex = index;
				}, 1000);
			},
			move () {
				this.invId = setInterval(() => {
					this.goto(this.nextIndex);
				}, this.inv);
			},
			stopMove () {
				clearInterval(this.invId);
			}
		},
		mounted () {
			this.move();
		},
		computed: {
			prevIndex () {
				if (this.nowIndex === 0) {
					return this.carouseSrc.length -1;
				} else {
					return this.nowIndex - 1;
				}
			},
			nextIndex () {
				if (this.nowIndex === this.carouseSrc.length - 1) {
					return 0;
				} else {
					return this.nowIndex + 1;
				}
			}
		}
	}
</script>
<style scoped>
	.carouse-box {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.carouse-content {
		height: 506px;
		position: absolute;
		left: 0;
		top: 0;
	}
	.carouse-content a img{
		position: absolute;
	}
	.carouse-pages {
		position: absolute;
		bottom: 10px;
		right: 15px;
	}
	.carouse-pages li {
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		display: inline-block;
	    cursor: pointer;
	    color: #000;
	    border-radius: 50%;
	}
	.carouse-pages li.selected {
		background-color: #000;
		color: #fff;
	}
	.carouse-btns span {
		position: absolute;
		color: #fff;
		width: 20px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		background-color: #000;
		cursor: pointer;
		top: 250px;
	}
	.prev-btn {
		left: 0;
	}
	.next-btn {
		right: 0;
	}
	.img-title {
		position: absolute;
		left: 10px;
		bottom: 10px;
	}
	.fade-enter-active{
		transform: translateX(0);
	  	transition: transform 1s;
	}
	.fade-old-leave-active{
	  	transition: transform 1s;
	}
	.fade-old-leave-to {
	  	transform: translateX(-100%);
	}
	.fade-enter {
	  	transform: translateX(100%);
	}
</style>