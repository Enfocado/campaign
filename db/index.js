const mysql = require('mysql');
const Log = require('log');

const log = new Log('info');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'campaign',
});

connection.connect((err) => {
  if (err) {
    log.error(`error connecting: ${err.stack}`);
    return;
  }
  log.info(`connected as id ${connection.threadId}`);
});

module.exports = {
  insert: (table, cols, values) => {
    const sql = `INSERT INTO ${table} (${cols}) VALUES (${values})`;
    connection.query(sql, (error, results) => {
      if (error) {
        log.error(error);
      } else {
        log.info(results);
      }
    });
  },
  retrieve: (origin, condition, callback) => {
    const sql = `SELECT * FROM ${origin} WHERE ${condition}`;
    connection.query(sql, (error, results) => {
      if (error) {
        log.error(error);
      } else {
        callback(null, results);
      }
    });
  },
};
