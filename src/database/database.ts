import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
  database:'practiceCloset',
  dialect: 'postgres', 
  username: 'postgres',
  password: 'Nezuko23',
  host: 'localhost'
});
