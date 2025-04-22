const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Travel = sequelize.define('Travel', {
  id: {
    type : DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'travellist',
  timestamps: false,  // createAt, updateAt 속성 사용 여부

});

module.exports = Travel;