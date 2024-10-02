// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../utility/sequelize';

  const user = sequelize.define('user', {
      id: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {
      timestamps: true,
      tableName: 'user'
  });

  export default user;