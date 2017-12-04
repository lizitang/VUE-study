// import { Mongoose } from 'mongoose';
let Mongoose = require('mongoose')
let db = require('./db')
let articleSchema = new Mongoose.Schema({
    title: String,
    date: Date,
    textContent: String,
    htmlConetnt: String,
    label: String
});

let articleModel = db.model('articles', articleSchema);
let articles = {
    save: (title, date, textContent, htmlConetnt, label) => {
        let articleItem = new articleModel({
            title: title,
            date: date,
            textContent: textContent,
            htmlConetnt: htmlConetnt,
            label: label
        });
        // articleItem.save();
    }
}
module.exports = articles;