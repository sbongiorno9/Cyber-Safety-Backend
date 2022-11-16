const express = require('express')
const checklistRouter = express.Router()
const checklistController = require('../controllers/checklistController')

checklistRouter.get('/', checklistController.getArticles)

checklistRouter.get('/:id', checklistController.getOneArticle)

checklistRouter.post('/', checklistController.createArticle)

checklistRouter.patch('/:id', checklistController.updateArticle)

checklistRouter.delete('/:id', checklistController.deleteArticle)

module.exports = checklistRouter
