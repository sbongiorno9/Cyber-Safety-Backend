const express = require('express')
const checklistRouter = express.Router()
const checklistController = require('../controllers/checklistController')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const verifyJWT = require('../verifyRouter')

checklistRouter.get('/', checklistController.getChecklists)

checklistRouter.get('/:id', checklistController.getOneChecklist)

checklistRouter.post('/', verifyJWT, jsonParser, checklistController.createChecklist)

checklistRouter.patch('/:id', verifyJWT, jsonParser, checklistController.updateChecklist)

checklistRouter.delete('/:id', verifyJWT, checklistController.deleteChecklist)

module.exports = checklistRouter
