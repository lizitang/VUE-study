<template>
	<div class="login-form">
		<form action="javascript:;">
			<p>用户名<input type="text" v-model="username" placeholder="请输入用户名"><span class="error">{{ userErrors.errorText }}</span></p>
			<p>密码<input type="password" v-model="password" placeholder="请输入密码"><span >{{ passwordErros.errorText }}</span></p>
			<p><button @click="onLogin">登录</button></p>
		</form>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				username: '',
				password: '',
				userFlag: false,
				passwordFlag: false
			}
		},
		methods: {
			onLogin () {
				if (!this.userErrors.status || !this.passwordErros.status) {
					alert('error')
				} else {
					this.$http.get('api/login')
					.then((res) => {
						this.$emit('has-login', res.data);
					}, (error) => {
						console.log(error);
					});
				}
			}
		},
		computed: {
			userErrors () {
				let errorText, status;
				if (!/@/g.test(this.username)) {
					status = false;
					errorText = '不包含@'
				} else {
					status = true;
					errorText = ''
				}
				if (!this.userFlag) {
					errorText = '';
					this.userFlag = true;
				}
				return {
					status,
					errorText
				}
			},
			passwordErros () {
				let errorText, status;
				if (!/^\w{1,6}$/g.test(this.password)) {
					status = false;
					errorText = '密码不是1-6位'
				} else {
					status = true;
					errorText = ''
				}
				if (!this.passwordFlag) {
					errorText = '';
					this.passwordFlag = true;
				}
				return {
					status,
					errorText
				}
			}
		}
	}
</script>