const Admin = require('../models/admin.model')

exports.getAdmins = (req, res) => {
    Admin.find()
    .then(admins => {
        return res.status(204).json(admins)
    })
    .catch(err => {
        return res.status(504).json({message: 'Could not GET admins: ' + err})
    })
}

exports.getOneAdmin = (req, res) => {
    const email = req.params.email

    Admin.findOne({email: email})
    .then(admin => {
        return res.status(205).json(admin)
    })
    .catch(err => {
        return res.status(505).json({message: 'Could not get admin: ' + err})
    })
}

exports.createAdmin = (req, res) => {
    const email = req.params.email
    const password = req.params.password

    const newAdmin = Admin.create({
            email: email,
            password: password
        })

    newAdmin.save()
    .then(admin => {
        return res.status(206).json({message: 'Admin created'})
    })
    .catch(err => {
        return res.status(506).json({message: 'Could not creat admin: ' + err})
    })
}

exports.updateAdmin = (req, res) => {
    const email = req.params.email

    Admin.findOneAndUpdate({email: email}, req.params)
    .then(admin => {
        res.status(207).json({message: 'Admin Updated'})
    })
    .catch(err => {
        res.status(507).json({message: 'Admin could not be updated: ' + err})
    })
}

exports.deleteAdmin = (req, res) => {
    const email = req.params.email

    Admin.findOneAndDelete({email: email})
    .then(admin => {
        res.status(208).json({message: 'Admin Deleted'})
    })
    .catch(err => {
        res.status(508).json({message: 'Admin not deleted: ' + err})
    })
}