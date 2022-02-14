const { HttpError } = require('http-errors')
const { sendApiError } = require('../lib')
const { User } = require('../models')
const controllers = {}

controllers.getAllUser = async(req,res,next) => {
    try {
        const getData = await User.findAll()

        return res.json(getData)
    } catch (error) {
        next(error)
    }
}

controllers.createUser = async(req,res,next) => {
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            fullName: req.body.fullName,
            age: req.body.age
        })

        return res.json({
            success:true
        })
    } catch (error) {
        next(error)
    }
}

module.exports = controllers