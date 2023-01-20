const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: String ,
    author: String,
    content: [{
        index: Number,
        contentType: String,
        buffer: Buffer,
        text: String
    }]
})

module.exports = mongoose.model("Article", ArticleSchema)