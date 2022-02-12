const express = require('express')
const { authController } = require('../controllers')
const router = express.Router()

router
    .route('/')
    .get(authController.indexPage)
    .post(authController.authUser)


module.exports = router