const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { render } = require('react-dom')
const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('user/SignUp.jsx')
})

router.post('/signup', async(req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    User.create(req.body)
    .then((user) => {
    res.redirect('/user/login')
    })
    .catch((err) => {
        console.log(err)
        res.json({err})
    })
})

router.get('/login', (req, res) => {
    res.render('user/Login.jsx')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
    .then(async (user) => {
        if (user) {
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                res.redirect('/comments')
            } else {
                res.json({ error: "password doesn't match" })
            }
        } else {
            res.json({ error: "user doesn't exist" })
        }
    })
    .catch((error) => {
        console.log(error)
        res.json({ error })
    })
})

module.exports = router 