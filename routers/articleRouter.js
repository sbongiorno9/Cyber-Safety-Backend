const express = require('express')
const articleRouter = express.Router()
const articleController = require('../controllers/articleController')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const verifyJWT = require('../verifyRouter')

articleRouter.get('/', articleController.getArticles)

articleRouter.get('/:id', articleController.getOneArticle)

articleRouter.post('/', verifyJWT, jsonParser, articleController.createArticle)

articleRouter.patch('/:id', verifyJWT, jsonParser, articleController.updateArticle)

articleRouter.delete('/:id', verifyJWT, articleController.deleteArticle)

module.exports = articleRouter
