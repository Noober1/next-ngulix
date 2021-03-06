const bodyParser = require('body-parser');
const path = require('path')
const favicon = require('serve-favicon');
const helmet = require('helmet')
const db = require('./models/')
const express = require('express')

class Middleware {
	constructor(express) {
		this.express = express
	}

	async init() {
		// body parser
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));
		// server favicon
		this.express.use(favicon(path.join(__dirname, '..', 'public', 'logo.png')));
		// set directory path for static files
		this.express.use(express.static('public'))
		// helmet
		this.express.use(helmet())
		// sync sequelize, database ORM with sequelize
		db.sequelize.sync()
		// call first error handler function
		this.initErrors()
	}

	initErrors() {
		this.express.use(async (err, req, res, next) => {
			/* This will be the first error handler to be called */
			console.error("Unexpected error")
			return next(err)
		})
	}

}

module.exports = Middleware
