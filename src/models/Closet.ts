import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Closet = sequelize.define('Closet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  waist: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});