const express = require('express')
const loginRouter = express.Router()
const adminController = require('../controllers/adminController.js')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

loginRouter.post('/', jsonParser, adminController.loginAdmin)

module.exports = loginRouter