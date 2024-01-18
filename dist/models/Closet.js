"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Closet = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Closet = database_1.sequelize.define('Closet', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    waist: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: true
});
