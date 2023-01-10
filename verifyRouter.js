const express = require('express')
const verifyRouter = express.Router()
const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate: " + err
            })

            req.admin = {}
            req.admin._id = decoded._id
            req.admin.email = decoded.email
            next()
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

function authorizeAdmin(req, res) {
    res.json({message:"Admin Authorized", isLoggedIn: true})
}

verifyRouter.get('/', verifyJWT, authorizeAdmin)

module.exports = verifyRouter