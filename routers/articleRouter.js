const express = require('express')
const articleRouter = express.Router()
const articleController = require('../controllers/articleController')

articleRouter.get('/', articleController.getArticles)

articleRouter.get('/:id', articleController.getOneArticle)

articleRouter.post('/', articleController.createArticle)

articleRouter.patch('/:id', articleController.updateArticle)

articleRouter.delete('/:id', articleController.deleteArticle)

module.exports = articleRouter
