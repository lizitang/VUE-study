const express = require('express')
const fs = require('fs')
//处理目录对象
const path = require('path')
const bodyParser = require('body-parser')
let router = require('./router')
let app = express()
 app.use('/static', express.static(path.resolve(__dirname, '../src')));
app.use(bodyParser.json());
console.log('sdfsfs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.get('*', function(req,res){
    console.log(res)
    res.sendFile(path.resolve(__dirname,'../index.html'))
    // res.sendFile(path.resolve(__dirname,'./index.html'));
    // let html = fs.readFileSync(resolve('./index.html'), 'utf-8');
    // res.send(html);
}).listen(process.env.PORT || 3000, function () {
    console.log('访问地址127.0.0.1:3000');
})