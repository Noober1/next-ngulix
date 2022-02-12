const { HttpError } = require('http-errors')
const { sendApiError } = require('../lib')
const { User } = require('../models')

const getAllUser = async(req,res,next) => {
    try {
        const getData = await User.findAll()

        return res.json(getData)
    } catch (error) {
        next(error)
    }
}

const createUser = async(req,res,next) => {
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

module.exports = {
    getAllUser,
    createUser
}