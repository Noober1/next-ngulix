const { HttpError } = require('http-errors')
const { sendApiError } = require('../lib')
const { Post } = require('../models')
const controllers = {}

controllers.getAllPost = async(req,res,next) => {
    try {
        const getData = await Post.findAll()

        return res.json(getData)
    } catch (error) {
        next(error)
    }
}

controllers.createPost = async(req,res,next) => {
    try {
        const inserting = await Post.create({
            title: 'untitled-' + new Date().getMilliseconds(),
            slug: 'entahlah juga',
            content: 'entahlah'
        })

        return res.json(inserting)
    } catch (error) {
        next(error)
    }
}

module.exports = controllers