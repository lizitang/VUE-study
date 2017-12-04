const fs = require('fs')
const path = require('path')
let express = require('express')
let db = require('./db')
let article = require('./article')
let router = express.Router()
router.post('/saveArticle', (req, res) => {
    console.log(req)
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req);
    res.send('rr')
    // article.save(req);
});

module.exports = router;