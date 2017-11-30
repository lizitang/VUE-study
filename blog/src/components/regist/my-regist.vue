<template>
	<div class="regist-box">
		<el-form ref="form" :model="form" label-width="80px">
			<h2>注册</h2>
		  	<el-form-item label="账号">
		    	<el-input v-model="form.name" placeholder="请输入账号"></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
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
			<el-button type="primary" @click="submitForm('dynamicValidateForm')">注册</el-button>	
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
	.regist-box {
		width: 400px;
		margin: 200px auto;
		text-align: center;
		padding: 30px 60px 30px 30px;
		border: 1px solid #409EFF;
	}
</style>