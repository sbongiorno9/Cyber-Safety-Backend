const express = require('express')
const contentRouter = express.Router()
const contentController = require('../controllers/contentController')

contentRouter.get('/', contentController.getContent)

module.exports = contentRouter