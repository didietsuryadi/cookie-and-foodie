'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    UserId: DataTypes.INTEGER,
    ForumId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vote.belongsTo(models.User)
        Vote.belongsTo(models.Forum)
      }
    }
  });
  return Vote;
};
