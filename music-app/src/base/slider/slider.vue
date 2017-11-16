<template>
	<div class="slider-content" >
		<ul class="slider-ul">
			<li class="slider-li">
				<transition name="fade-old">
					<a v-if="isShow" :href="sliderContent[nowIndex].linkUrl" class="slier-link">
						<img :src="sliderContent[nowIndex].picUrl" alt="">
					</a>
				</transition>
				<transition name="fade">
					<a v-if="!isShow" :href="sliderContent[nextIndex].linkUrl" class="slier-link">
						<img :src="sliderContent[nowIndex].picUrl" alt="">
					</a>
				</transition>

			</li>
		</ul>
		<ul class="click-ul">
			<li v-for="(item, index) in sliderContent" class="click-li" :class="{selected: index === nowIndex}" @click="selectImg(index)"></li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: {
			sliderContent: {
				type: Array,
				default: [
					{
						id: 0,
						linkUrl: 'http://y.qq.com/w/album.html?albummid=004VGR270Xu2BZ',
						picUrl: 'http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/212159.png'
					},
					{
						id: 0,
						linkUrl: 'http://y.qq.com/w/album.html?albummid=004VGR270Xu2BZ',
						picUrl: 'http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/212159.png'
					}
				]
			}
		},
		data () {
			return {
				nowIndex: 0,
				itv: '',
				itvTime: 1000,
				isShow: true
			}
		},
		// mounted () {
		// 	this.runInterval();
		// },
		methods: {
			selectImg (index) {
				this.nowIndex = index;
			},
			runInterval () {
				this.itv = setInterval(() => {
					this.nextIndex();
				}, this.itvTime)
			},
			removeInter () {
				removeInter(this.itv);
			}
		},
		computed: {
			nextIndex () {
				this.nowIndex++;
				if (this.nowIndex === this.sliderContent.length) {
					this.nowIndex = 0;
				}
				return this.nowIndex;
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable.styl"
	.slider-content
		width 100%
		height 144px
		position absolute
		.slider-ul
			float left
			width 100%
			height 144px
			position absolute
			.slider-li
				width 100%
				position absolute
				.slier-link
					img
						width 100%
		.click-ul
			position absolute
			bottom 10px
			left 50%
			transform translate(-50%, 0)
			z-index 1
			.click-li
				display inline-block
				width 5px
				height 5px
				border-radius 50%
				background-color $color-background-d
				margin-right 5px
			.selected
				background-color $color-theme-d
</style>