<template>
	<div>
		<div class="app-header">
			<div class="content-container">
				<div class="app-header-inner">
					<a href="" class="app-logo">
						<router-link :to="{path: '/'}">
							<img src="../assets/logo.png" alt="">
						</router-link>
						
					</a>
					<div class="header-nav">
						<ul class="nav-list">
							<li><a href="">{{ name }}</a></li>
							<li @click="loginClick" v-if="name === ''"><a href="javascript:;">登录</a></li>
							<li @click="registClick" v-if="name === ''"><a href="javascript:;">注册</a></li>
							<li @click="aboutClick"><a href="javascript:;">关于</a></li>
							<li v-if="name !== ''" @click="quit"><a href="">退出</a></li>
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
		<my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>other hello</p>
		</my-dialog>
		<my-dialog :is-show="isShowLoginDialog" @on-close="closeDialog('isShowLoginDialog')">
			<login-form @has-login="onSuccessLogin"></login-form>
		</my-dialog>
		<my-dialog :is-show="isShowRegistDialog" @on-close="closeDialog('isShowRegistDialog')">
			<regist-form></regist-form>
		</my-dialog>
	</div>
</template>
<script>
	import Dialog from './dialog'
	import LoginForm from './loginForm'
	import RegistForm from './registForm'
	export default {
		components: {
			myDialog: Dialog,
			loginForm: LoginForm,
			registForm: RegistForm
		},
		data () {
			return {
				isShowAboutDialog: false,
				isShowLoginDialog: false,
				isShowRegistDialog: false,
				name: ''
			}
		},
		methods: {
			aboutClick () {
				this.isShowAboutDialog = true;
			},
			loginClick () {
				this.isShowLoginDialog = true;
			},
			registClick () {
				this.isShowRegistDialog = true;
			},
			closeDialog (attr) {
				this[attr] = false;
			},
			onSuccessLogin (data) {
				this.name = data.name;
				this.closeDialog('isShowLoginDialog');
			},
			quit () {
			}
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