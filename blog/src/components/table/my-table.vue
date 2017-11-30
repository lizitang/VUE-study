<template>
  <div class="table-box">
        <div class="table-header-container">
            <el-button type="primary">新增文章</el-button>
            <el-input v-model="input" placeholder="搜索内容"></el-input>
        </div>
        <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column type="selection" width="100">
            </el-table-column>
                <el-table-column
                prop="date"
                label="日期"
                sortable
                width="250">
            </el-table-column>
            <el-table-column
                prop="title"
                label="文章标题"
                width="450">
            </el-table-column>
            <el-table-column
                prop="classify"
                label="文章分类"
                sortable
                width="250">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="220">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
  </div>
</template>
<script>
export default {
    data () {
        return {
            tableData: [
                {
                    date: '2017-11-10',
                    title: 'title1',
                    classify: 'node',
                    name: '张三'
                },
                {
                    date: '2017-11-01',
                    title: 'title2',
                    classify: 'node',
                    name: '张三'
                },
                {
                    date: '2017-11-16',
                    title: 'title3',
                    classify: 'vue',
                    name: '王力宏'
                },
                {
                    date: '2017-11-13',
                    title: 'title4',
                    classify: 'js',
                    name: '林俊杰'
                },
                {
                    date: '2017-11-13',
                    title: 'title4',
                    classify: 'css',
                    name: '周杰伦'
                }]
        }
        
    }
}
</script>
<style>
    .table-header-container {
        padding: 10px;
    }
    .el-input {
        margin-right: 30px;
        float: right;
        width: 300px;
    }
</style>

