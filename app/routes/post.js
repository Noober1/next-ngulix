const express = require('express')
const router = express.Router()

const { postController } = require('../controllers')

router
    .route('/')
    .get(postController.getAllPost)

module.exports = router