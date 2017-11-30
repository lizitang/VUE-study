<template>
  <div class="slider-box">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <router-link to="/my-table" tag="div">
                <el-menu-item index="1">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">文章管理</span>
                </el-menu-item>
            </router-link>
            <router-link to="/my-edit" tag="div">
                <el-menu-item index="2">
                    <i class="el-icon-edit"></i>
                    <span slot="title">编辑文章</span>
                </el-menu-item>
            </router-link>
            <router-link to="/my-reader" tag="div">
                <el-menu-item index="3">
                    <i class="el-icon-bell"></i>
                    <span slot="title">读者评论</span>
                </el-menu-item>
            </router-link>
            </el-menu>
            
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
    .slider-box {
        width: 230px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: 60px;
        border-right: solid 1px #e6e6e6;
        box-sizing: border-box;
    }
    .el-menu {
        border-right: none;
    }
</style>

