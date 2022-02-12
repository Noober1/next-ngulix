const apiRoute = require("./apiRoutes")
const PagesRoute = require("./pagesRoutes")
const httpErrors = require('http-errors')

class NextjsExpressRouter {
	constructor(express, next) {
		this.express = express
		this.next = next
	}

	async init() {
		// Initialize API pages
		this.initApi()
		// Initialize Next.js pages
		this.initPages()
		// Initialize Next.js errors paage
		this.initErrors()
	}

	initApi() {
		return this.express.use(
			// route
			'/api',
			// controller middlerware
			apiRoute,
			// page not found middlerware
			this.apiNotFound,
			// unhandle error hanldler middlerware
			this.apiUnhandledError
		)
	}

	apiNotFound(req,res,next) {
		next(httpErrors(404, `Route not found: ${req.url}`))
	}

	apiUnhandledError(err, req, res, next) {
		return res.status(err.status || 500).json({
			code: err.code ? error.code : err.status == '404' ? 'ROUTE_NOT_FOUND' : 'INTERNAL_SERVER_ERROR',
			message: err.message
		})
	}

	initPages() {
		const pages = new PagesRoute(this.express, this.next)
		return pages.init()
	}

	initErrors() {
		// catch 404 and forward to error handler
		this.express.use((req, res, next) => {
			const err = new Error('Not Found')
			err.status = 404
			next(err)
		})

		this.express.use((err, req, res, next) => {
			res.status(err.status || 500)
			res.locals.error = err
			res.locals.errorDescription = err.message
			this.next.render(req, res, "/_error", {  })
		})
	}
}

module.exports = NextjsExpressRouter
