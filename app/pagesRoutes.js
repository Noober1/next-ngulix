class Pages {
	constructor(express, next) {
		this.express = express
		this.next = next
	}

	init() {
		this.initDefaults()
	}

	initDefaults() {
		this.express.get('*', (req, res) => {
			return this.next.render(req, res, `${req.path}`, req.query)
		})
	}
}

module.exports = Pages
