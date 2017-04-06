'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    UserId: DataTypes.INTEGER,
    ForumId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Forum)
        Comment.belongsTo(models.User)
      }
    }
  });
  return Comment;
};
