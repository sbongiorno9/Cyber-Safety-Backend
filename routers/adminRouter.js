const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/adminController')

adminRouter.get('/', adminController.getAdmins)

adminRouter.get('/:email', adminController.getOneAdmin)

adminRouter.delete('/:email', adminController.deleteAdmin)

module.exports = adminRouter