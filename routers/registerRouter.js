const express = require('express')
const registerRouter = express.Router()
const adminController = require('../controllers/adminController')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

registerRouter.post('/', jsonParser, adminController.registerAdmin)

module.exports = registerRouter