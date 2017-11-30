<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
		<div class="dots">
			<span class="dota" v-for="item in dots"></span>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {addClass} from 'common/js/dom'
	export default {
		props: {
			//轮播
			loop: {
				type: Boolean,
				default: true
			},
			//自动轮播
			autoPlay: {
				type: Boolean,
				default: true
			},
			//定时器时间
			interval: {
				type: Number,
				default: 4000
			}
		},
		data () {
			return {
				dots: []
			}
		},
		mounted() {
			this.$nextTick(function () {
				this._setSliderWidth();
				this._initDots();
				this._initSlider();
		  	})
		},
		methods: {
			_initDots() {
				this.dots = new Array(this.children.length);
			},
			_setSliderWidth() {
				this.children = this.$refs.sliderGroup.children;
				let width = 0;
				let sliderWidth = this.$refs.slider.clientWidth;
				for (let i = 0; i < this.children.length; i++) {
					let child = this.children[i];
					addClass(child, 'slider-item');
					child.style.width = sliderWidth + 'px';
					width += sliderWidth;
				}
				if (this.loop) {
					width += 2 * sliderWidth
				}
				this.$refs.sliderGroup.style.width = width + 'px';
			},
			_initSlider() {
				this.slider = new BScroll(this.$refs.slider, {
					scrollX: true,
					scrollY: false,
					momentum: false,
					snap: true,
					snaLoop: this.loop,
					snapThreshold: 0.3,
					snapSpeed: 400,
					click: true
				})
			}
		}

	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable.styl"
	.slider
		min-height 1px
		position relative
		.slider-group
			position relative
			overflow hidden
			white-space nowrap
			.slider-item
				float left
				box-sizing border-box
				overflow hidden
				text-align center
				a
					display block
					width 100%
					overflow hidden
					text-decoration none
					img
						display block
						width 100%
		.dots
			position absolute
			left 50%
			transform translateX(-50%)
			bottom 12px
			z-index 999
			span
				width 8px
				height 8px
				display inline-block
				border-radius 50%
				background-color $color-text-l
				margin-right 5px
</style>