const connection = require('../../config/db.config.js');
// const uniquestring=require('unique-string');

module.exports = {

  saveData: function (sql, callback) {
    connection.query(sql, function (err, results) {
      if (err) {
        return callback(err);
      }

      return callback(results);
    });
  },

  volunteerInfo: function (params) {
    let data = {};
    data.name = params.name;
    data.gender = params.gender;
    data.phone_no = params.phone_no;
    data.email = params.email;
    data.location = params.location;
    data.role = params.role;
    data.info = params.info;
    data.giturl = params.giturl;
    data.description = params.description;

    data.created_at = new Date().toISOString().slice(0, 10);
    return data;
  },

  participantInfo: function (params) {
    let data = {};
    data.name = params.name;
    data.gender = params.gender;
    data.phone_no = params.phone_no;
    data.email = params.email;
    data.location = params.location;
    data.level = params.level;
    data.info = params.info;
    data.giturl = params.giturl;
    data.description = params.description;

    data.created_at = new Date().toISOString().slice(0, 10);
    return data;
  },

  constructSql: function (table, data) {
    let sql = "INSERT INTO " + table + " (";
    let colname = "";
    let colvals = "";
    let array_data = Object.entries(data);
    let len = array_data.length - 1;

    for (const [key, value] of Object.entries(data)) {
      colname += key + ", ";
      colvals += "'" + value + "', ";
    }
    colname = colname.slice(0, -2);
    colvals = colvals.slice(0, -2);
    sql += colname + ") VALUES(";
    sql += colvals + ")";
    return sql;
  }

};