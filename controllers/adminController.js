const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
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
    .then(() => {
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

exports.registerAdmin = async(req, res) => {
    const admin = req.body
    console.log(admin)
    const takenEmail = await Admin.findOne({email: admin.email})

    if (takenEmail) {
        res.json({message: "Admin with this email already exists"})
    } else {
        admin.password = await bcrypt.hash(req.body.password, 10)
        
        const newAdmin = new Admin({
            email: admin.email.toLowerCase(),
            password: admin.password
        })

        newAdmin.save()
        res.json({message: "Admin Registered"})
    }
}
exports.loginAdmin = (req, res) => {
    const adminLoggingIn = req.body

    Admin.findOne({email: adminLoggingIn.email})
    .then(admin => {
        if(!admin) {
            return res.json({message: "Invalid Email or Password"})
        }

        bcrypt.compare(adminLoggingIn.password, admin.password)
        .then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: admin._id,
                    email: admin.email
                }

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) return res.json({message:"Error: " + err})
                        return res.json({
                            mesage: "Success",
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Invalid Email or Password"
                })
            }
        })
    })
}