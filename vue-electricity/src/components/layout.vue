<template>
	<div>
		<div class="app-header">
			<div class="content-container">
				<div class="app-header-inner">
					<a href="" class="app-logo">
						<img src="../assets/logo.png" alt="">
					</a>
					<div class="header-nav">
						<ul class="nav-list">
							<li><a href="">登录</a></li>
							<li><a href="">注册</a></li>
							<li><a href="">关于</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<div class="content-container">
				<p>@ 2017 zhangyan</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {

		}
	}
</script>
<style>
	html, body, h1, h2, h3{
		font-size: 14px;
		font-weight: normal;
	}
	* {
		margin: 0;
		padding: 0;
	}
	ul,li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: #444;
	}
	.content-container {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
	}
	.app-header {
		float: left;
		width: 100%;
		background: #363636;
	    color: #b2b2b2;
	    height: 90px;
	    line-height: 90px;
	}
	.app-logo {
		float: left;
	}
	.app-header-inner img {
		width: 50px;
		margin-top: 20px;
	}
	.header-nav {
		height: 100%;
		float: right;
		margin-top: 32px;
	}
	.nav-list {
		height: 18px;
		line-height: 18px;
	}
	.nav-list li{
		float: left;
		margin-right: 20px;
		padding-right: 10px;
		border-right: 1px solid #b2b2b2;
	}
	.nav-list li:last-child {
		border-right: none;
	}
	.nav-list li a {
		float: left;
		color: #b2b2b2;
	}
	.app-footer {
		text-align: center;
	    height: 80px;
	    line-height: 80px;
	    background: #e3e4e8;
	    clear: both;
	}
	.app-footer p {
		margin-top: 30px;
	}
	.app-content {
		width: 100%;
		background-color: #f0f2f5;
	}
</style>