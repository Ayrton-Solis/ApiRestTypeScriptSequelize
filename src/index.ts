import app from "./app";
import { sequelize } from "./database/database";

async function server() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log(`Server listen on port ${3000}`);
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
};

server();

