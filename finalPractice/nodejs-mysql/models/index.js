const dbConfig = require("../config/database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employes = require("./employe.model.js")(sequelize, Sequelize);

module.exports = db;