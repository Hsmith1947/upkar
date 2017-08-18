const conn = require("../../config/conn");
const mysql = require("mysql");


module.exports = class {
    static exec(query, inserts) {
        return new Promise((resolve, reject) => {
            conn.query(mysql.format(query, inserts), (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }
}