<template>
	<div class="recommend">
		<div class="recommend-content">
			<div class="slider-wrapper">
				<my-slider :sliderContent="sliderContent"></my-slider>
			</div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>
<script>
	import {getRecommend} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	import MySlider from 'base/slider/slider'
	export default {
		components: {
			MySlider
		},
		data () {
			return {
				sliderContent: []
			}
		},
		created () {
			this._getRecommed()
		},
		methods: {
			_getRecommed () {
				getRecommend().then((res) => {
					if (res.code === ERR_OK) {
						console.log(res.data.slider);
						this.sliderContent = res.data.slider;
					}
				})
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.recommend
		position fixed
		left 0px
		top 88px
		width 100%
		bottom 0
		.recommend-content
		height 100%
		overflow hidden
		.slider-wrapper
			position relative
			width 100%
			overflow hidden
		.recommend-list
			.list-title
				height 65px
				line-height 65px
				text-align center
				font-size $font-size-medium
				color $color-theme
			.item
				display flex
				box-sizing border-box
				align-items center
				padding 0 20px 20px 20px
				.icon
					flex 0 0 60px
					width 60px
					padding-right 20px
				.text
					display flex
					flex-direction column
					justify-content center
					flex 1
					line-height 20px
					overflow hidden
					font-size $font-size-medium
					.name
						margin-bottom 10px
						color $color-text
					.desc
						color $color-text-d
</style>