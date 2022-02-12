const dbConfig = require("../config/db");
const Sequelize = require("sequelize");
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
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