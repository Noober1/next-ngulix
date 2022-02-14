// const dbConfig = require("../config/db");
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require("path");

const validateDbConfig = () => {
	try {
		let rawConfig = fs.readFileSync(path.join(__dirname, '..', 'config', 'db.json'))
		let parseConfig = JSON.parse(rawConfig)
		if (
			parseConfig.database ||
			parseConfig.host ||
			parseConfig.username ||
			parseConfig.password ||
			parseConfig.dialect 
		) {
			throw new Error("Configuration doesn't meet requirement")
		}
		return parseConfig
	} catch (error) {
		console.error(error)
		console.log('Database configuration file error')
		process.exit(1)
	}
}

const getConfig = validateDbConfig()
const dbConfig = getConfig[process.env.NODE_ENV] || getConfig["development"]

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
})

module.exports = {
	sequelize: db,
	Sequelize: Sequelize,
	User: require("./user")(db, Sequelize)
}