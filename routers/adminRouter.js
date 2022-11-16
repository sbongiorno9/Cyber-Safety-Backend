const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/adminController')

adminRouter.get('/', adminController.getAdmins)

adminRouter.get('/:email', adminController.getOneAdmin)

adminRouter.post('/', adminController.createAdmin)

adminRouter.patch('/:email', adminController.updateAdmin)

adminRouter.delete('/:email', adminController.deleteAdmin)

module.exports = adminRouter