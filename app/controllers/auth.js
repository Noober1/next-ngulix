const { User } = require('../models')
const { sendError } = require('../lib')
const httpStatus = require('http-status')
const controllers = {}

controllers.indexPage = (req,res) => {
    return res.json({
        authRoute:'OK'
    })
}

controllers.getUserById = (req,res,next) => {
    try {
        return res.json({
            id: req.params.id || ''
        })
    } catch (error) {
        next(error)
    }
}

controllers.authUser = async(req,res,next) => {
    try {
        const getData = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        return res.json({
            data:getData,
            isPasswordValid: getData.isPasswordValid(req.body.password)
        })
    } catch (error) {
        next(error)
    }
}

module.exports = controllers