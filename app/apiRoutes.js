const express = require('express')
const router = express.Router()
const { auth, user } = require('./routes')

router.get('/', (req,res) => {
    return res.json({
        app:'Next Ngulix'
    })
})

router.use('/auth', auth)
router.use('/user', user)

module.exports = router