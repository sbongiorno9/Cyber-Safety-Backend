const express = require('express')
const checklistRouter = express.Router()
const checklistController = require('../controllers/checklistController')

checklistRouter.get('/', checklistController.getChecklists)

checklistRouter.get('/:id', checklistController.getOneChecklist)

checklistRouter.post('/', checklistController.createChecklist)

checklistRouter.patch('/:id', checklistController.updateChecklist)

checklistRouter.delete('/:id', checklistController.deleteChecklist)

module.exports = checklistRouter
