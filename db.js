// const mysql = require('mysql2/promise')
const mysql = require('mysql')

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
    host:"scheduledb.cdq6womsw7wv.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "9Up7757rAnJVaCZk",
    database: "dbName",
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