module.exports = (sequelize, DataTypes) => {
    const schema = sequelize.define("Post",{
			title: DataTypes.STRING,
			slug: DataTypes.STRING,
			content: DataTypes.STRING,
			category: {
				type: DataTypes.STRING(20),
				defaultValue: 'uncategorized'
			},
			tags: {
				type: DataTypes.STRING
			}
		}, {
		freezeTableName: true
	})
	
	return schema
};