<template>
	<div class="content-container">
		<div class="content-left">
			<div class="all-productors index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="list in product.list">
							<a :href="list.url">{{ list.title }}</a>
							<span v-if="list.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="lastest-news index-left-block">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in  newsList">
						<a :href="item.url" class="news-item">{{ item.title }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="content-right">
			<div class="carouse-container">
				<carouse :carouseSrc="carouseSrc" :inv="carouseSpeed"></carouse>
			</div>
			<div class="productor-intro">
				<div class="productor-item" v-for="(item, index) in boardList" :class="{'odd-inner': index % 2 !== 0}">
					<div class="productor-inner" :class="'productor-inner-'+ item.id">
						<h2>{{ item.title }}</h2>
						<p>{{ item.desc }}</p>
						<div class="buy-btn">
							<a href="">立即购买</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import carouse from '../components/carouse'
	export default {
		components: {
			carouse
		},
		created () {
			this.$http.get('api/newsList').then((res) => {
				this.newsList = res.data;
			}, (err) => {
				console.log(err);
			});
		},
		data () {
			return {
				newsList: [],
				carouseSpeed: 2000,
				carouseSrc: [
					{
						src: require('../assets/images/pic1.jpg'),
						title: 'xxx1',
						href: 'detail/analysis'
					},
					{
						src: require('../assets/images/pic2.jpg'),
						title: 'xxx2',
						href: 'detail/count'
					},
					{
						src: require('../assets/images/pic3.jpg'),
						title: 'xxx3',
						href: 'detail/publish'
					},
					{
						src: require('../assets/images/pic4.jpg'),
						title: 'xxx4',
						href: 'detail/forecast'
					}
				],
				productList: {
					pc: {
						title: 'PC产品',
						list: [
							{
								title: '数据统计',
								url: 'detail/count'
							},
							{
								title: '数据预测',
								url: 'detail/forecast'
							},
							{
								title: '流量分析',
								url: 'detail/analysis',
								hot: true
							},
							{
								title: '广告分布',
								url: 'detail/publish'
							}

						]
					},
					app: {
						title: '手机应用类',
						last: true,
						list: [
							{
								title: '91助手',
								url: 'www.baidu.com'
							},
							{
								title: '产品助手',
								url: 'www.baidu.com'
							},
							{
								title: '智能地图',
								url: 'www.baidu.com',
								hot: true
							},
							{
								title: '团队语音',
								url: 'www.baidu.com'
							}
						]
					}
				},
				boardList: [
					{
						title: '开放产品',
						id: 0,
						desc: '开放产品是一款开放产品'
					},
					{
						title: '开放产品',
						id: 1,
						desc: '开放产品是一款开放产品'
					},
					{
						title: '使命必达',
						id: 2,
						desc: '使命必达快速迭代永远保持最前端的速度'
					},
					{
						title: '勇攀高峰',
						id: 3,
						desc: '帮你勇闯高峰，到达事业的顶峰'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.content-left {
		float: left;
	    width: 300px;
	    text-align: left;
	}
	.content-right {
		float: right;
		width: 900px;
	}
	.index-left-block {
		margin: 15px 15px 15px 0;
	    background: #fff;
	    box-shadow: 0 0 1px #ddd;
	}
	.index-left-block h2 {
		background: #4fc08d;
	    color: #fff;
	    padding: 10px 15px;
	    margin-bottom: 20px;
	}
	.index-left-block h3 {
		padding: 0 15px 5px 15px;
	    font-weight: bold;
	    color: #222;
	}
	.index-left-block ul {
		padding: 10px 15px;
	}
	.index-left-block li {
		padding: 5px;
	}
	.hr {
		height: 1px;
	    width: 100%;
	    background: #ddd;
	    margin-bottom: 20px
	}
	.hot-tag {
		background-color: #f00;
		color: #fff;
	}
	.carouse-container {
		position: relative;
	    margin: 15px 15px 15px 0;
	    width: 900px;
	    height: 500px;
	    overflow: hidden;
	    background-color: #ccc;
	}
	.productor-item {
		float: left;
	    width: 400px;
	    background: #fff;
	    box-shadow: 0 0 1px #ddd;
	    padding: 20px;
	    margin-right: 20px;
	    margin-bottom: 20px;
	}
	.odd-inner {
		margin-right: 0;
	}
	.productor-inner {
		padding-left: 120px;
	}
	.productor-inner-0 {
		background: url(../assets/images/1.png) no-repeat;
	}
	.productor-inner-1 {
		background: url(../assets/images/2.png) no-repeat;
	}
	.productor-inner-2 {
		background: url(../assets/images/3.png) no-repeat;
	}
	.productor-inner-3 {
		background: url(../assets/images/4.png) no-repeat;
	}
	.buy-btn {
		margin-top: 20px;
	}
	.buy-btn a {
		background: #4fc08d;
	    color: #fff;
	    display: inline-block;
	    padding: 10px 20px;
	    cursor: pointer;
	}
	.news-item {
		display: inline-block;
		width: 230px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>