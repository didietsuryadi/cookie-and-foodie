'use strict';
module.exports = function(sequelize, DataTypes) {
  var Forum = sequelize.define('Forum', {
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    price: DataTypes.STRING,
    hash_tag: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Forum.belongsTo(models.User)
        Forum.hasMany(models.Comment)
        Forum.hasMany(models.Vote)
      }
    }
  });
  return Forum;
};
