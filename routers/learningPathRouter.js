const express = require('express')
const learningPathRouter = express.Router()
const learningPathController = require('../controllers/learningPathController')

learningPathRouter.get('/', learningPathController.getLearningPaths)

learningPathRouter.get('/:id', learningPathController.getOneLearningPath)

learningPathRouter.post('/', learningPathController.createLearningPath)

learningPathRouter.patch('/:id', learningPathController.updateLearningPath)

learningPathRouter.delete('/:id', learningPathController.deleteLearningPath)

module.exports = learningPathRouter
