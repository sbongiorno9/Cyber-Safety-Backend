const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LearningPathSchema = new Schema({
    title: String,
    author: String,
    content: String,
    images: [{
        data: Buffer,
        contentType: String
    }]
})

module.exports = mongoose.model("LearningPath", LearningPathSchema)