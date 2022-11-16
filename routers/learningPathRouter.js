const express = require('express')
const learningPathRouter = express.Router()
const learningPathController = require('../controllers/learningPathController')

learningPathRouter.get('/', learningPathController.getArticles)

learningPathRouter.get('/:id', learningPathController.getOneArticle)

learningPathRouter.post('/', learningPathController.createArticle)

learningPathRouter.patch('/:id', learningPathController.updateArticle)

learningPathRouter.delete('/:id', learningPathController.deleteArticle)

module.exports = learningPathRouter
