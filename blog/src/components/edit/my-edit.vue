<template>
  <div class="edit-container">
        <p class="article-title article-item">文章标题：<el-input v-model="articleTitle" placeholder="请输入内容"></el-input></p>
        <!-- <p class="article-item">文章类别：
            <el-dropdown @click="alert(1)">
                <span class="el-dropdown-link">
                    <span class="classify-name">{{defaultClassify.name}}</span>    
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item  v-for="(item,index) in classifyArray" @click="handleClassify(item)">{{ item.name }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </p> -->
      <div class="maskContainer" v-if="dilogStatus">
            <div class="contentContainer">
            <div class="closeBtnContainer" @click="closeMaskFn"></div>
                <textarea class="showAreaContainer" v-model="msgShow" readonly></textarea>
            </div>
        </div>
        <div class="editorContainer">
            <markdown 
            :mdValuesP="msg.mdValue"  
            :fullPageStatusP="false" 
            :editStatusP="true" 
            :previewStatusP="true" 
            :navStatusP="true"
            :icoStatusP="true"  
            @childevent="childEventHandler"
            ></markdown>
        </div>
        <!-- <div class="btnsContainer">
            <div class="btn" @click="getMdValueFn">获取mdValue</div>
            <div class="btn" @click="getHtmlValueFn">获取htmlValue</div>
        </div> -->
        <div class="btns-box">
            <el-button type="primary" class="save-btn" @click="saveArticle">存为草稿箱</el-button>
            <el-button type="primary" class="publish-btn" @click="publishArticle">发布</el-button>
        </div>
        
  </div>
</template>
<script>  
    import markdown from '../markdown/markdown'
    export default {
        name: 'index',
        data() {
            return {
                articleTitle: '',
                msgTextShow: '',
                msgHtmlShow: '',
                dilogStatus:false,
                msg: {
                    mdValue:''
                },
                classifyArray: [
                    {value: 0, name:"node"},
                    {value: 1, name:"javascript"},
                    {value: 2, name:"css"}
                ],
                defaultClassify: {value: 0, name:"node"}
            }
        },
        components: {
            markdown
        },
        methods: {
            saveArticle () {
                this.getMdValueFn();
                this.getHtmlValueFn();
                console.log(this.articleTitle);
                console.log(this.msgTextShow);
                console.log(this.msgHtmlShow);
            },
            publishArticle () {
                this.getMdValueFn();
                this.getHtmlValueFn();
                console.log(this.articleTitle);                
                console.log(this.msgTextShow);
                console.log(this.msgHtmlShow);
                axios.post('/api/publishArticle',{
                    title: this.articleTitle,
                    text: this.msgTextShow,
                    html: this.msgHtmlShow
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            },
            childEventHandler:function(res){
                // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
                this.msg=res;
            },
            //获取markdown里面的内容
            getMdValueFn:function(){
                this.msgTextShow=this.msg.mdValue;
            },
            getHtmlValueFn:function(){
                this.msgHtmlShow=this.msg.htmlValue;
                
            },
            closeMaskFn:function(){
                this.msgShow='';
                this.dilogStatus=false;
            },
            handleClassify: function (item) {
                console.log(item);
                this.defaultClassify = item;
            }
        }
    }
</script>
<style scoped>
    body, html{
        height: 100%;
    }
    .edit-container {
        padding: 40px 40px 0 40px;
        height: 100%;
        box-sizing: border-box;
    }
    .article-item {
        padding: 20px 0;
    }
    .article-title .el-input {
        width: 50%;
    }
    .classify-name {
        display: inline-block;
        width: 80px;
    }
    .editorContainer {
        width: 90%;
        height: 80%;
        border: 1px solid #ddd;
    }
    .btns-box {
        padding: 20px 132px 0 0;
        float: right;
    }
</style>


