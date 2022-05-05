// const mysql = require('mysql2/promise')
const mysql = require('mysql')
require("dotenv").config()
// const db = mysql.createPool({
//     host: process.env.HOSTSQL,
//     port: process.env.PORTSQL,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASENAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })
const db = mysql.createConnection({
    host: process.env.HOSTSQL,
    port: process.env.PORTSQL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASENAME
})
db.connect((err) =>{
    if(err){
        console.log(err.message)
        return;

    }
    // db.query("SELECT * FROM account", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    console.log("db connect")
})
module.exports = db
// export default db