import * as pg from 'pg';
import { Sequelize } from 'sequelize';


const DATABASE_URL = 'postgres://postgres:root@localhost:5432/atleticoclub';
const sequelize = new Sequelize(DATABASE_URL, {
  dialectModule: pg
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successfully established.');
  } catch (error) {
    console.error('Error connecting to the database :', error);
  }
})();

// Export the sequelize instance and models
export default sequelize;
