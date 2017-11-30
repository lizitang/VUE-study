<template>
	<div class="login-box">
		<el-form ref="form" :model="form" label-width="80px">
			<h2>登录</h2>
		  	<el-form-item label="账号">
		    	<el-input v-model="form.name" placeholder="请输入账号"></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item
			    prop="email"
			    label="邮箱"
			    :rules="[
			      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
			      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
			    ]"
			  >
			    <el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
			<router-link tag="a" to="/my-regist" class="regist-link">
				还没有账号请注册
			</router-link>	
		</el-form>
	</div>
	
</template>
<script>
	export default {
		data () {
			return {
				form: {
					name: '',
					pass: '',
					email: ''
				}
				
			}
		}
	}
</script>
<style>
	.login-box {
		width: 400px;
		margin: 200px auto;
		text-align: center;
		padding: 30px 60px 30px 30px;
		border: 1px solid #409EFF;
	}
	.regist-link {
		display: block;
		text-decoration: none;
		text-align: right;
	}
</style>