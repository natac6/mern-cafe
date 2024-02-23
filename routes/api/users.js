const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
// const ensureLoggedIn = require('../../config/ensureLoggedIn');
// You can protect specific routes inside your model routes and just pass it in the route you want protected

// POST /api/users
router.post('/', usersCtrl.create)
// POST /api/users/login
router.post('/login', usersCtrl.logIn)
// PUT /api/users/:id
// router.put('/:id', ensureLoggedIn, usersCtrl.update)

module.exports = router