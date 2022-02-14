'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Post', 'category',{
      type: Sequelize.STRING(20),
      defaultValue: 'uncategorized'
    })
    await queryInterface.addColumn('Post', 'tags',{
      type: Sequelize.STRING,
      defaultValue: '[]'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Post', 'category')
    await queryInterface.removeColumn('Post', 'tags')
  }
};
