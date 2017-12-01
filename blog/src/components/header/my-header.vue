<template>
  <div class="m-header">
        <h1 class="welcome-title">欢迎进入</h1>
        <div class="avatar">
            <img src="" alt="">
            <i class="el-icon-remove-outline"></i>
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
    * {
        margin: 0;
        padding: 0;
    }
    .m-header {
        height: 60px;
        padding: 0 60px 30px 20px;
        box-sizing: border-box;
        line-height: 60px;
    }
    .welcome-title {
        float: left;
        font-family: 'Microsoft YaHei';
        font-size: 20px;
        color: #2D2F33;
    }
    .avatar {
        float: right;
    }
</style>

