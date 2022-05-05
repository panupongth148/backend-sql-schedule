const db = require("../db")

function generateToken () {
    const result = [];
    const characters = '*/=-$#!@^&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 100; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
   }
   return result.join('');
}

const registerAccount = async (req, res) => {
    console.log("In register")
    const account = {username: req.body.username, name: req.body.name, password: req.body.password, email: req.body.email}
    // let sql = `insert into account values(${req.body.username}, ${req.body.password}, ${req.body.email})`;
    let sql = `insert into account set ?`;
    let query = db.query(sql, account, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.send("success register");
    });
}

const getAllUser = async (req, res) =>{
    console.log("In getuser")
    let sql = 'SELECT * FROM account';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
}

const getUserByUsername = async (req, res) =>{
    console.log("In getuser by username")
    let sql = `SELECT * FROM account WHERE username = \'${req.params.username}\'`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
}

const login = async (req, res) => {
    console.log("In Login")
    let sql = `SELECT * FROM account WHERE username = \'${req.body.username}\'`;
    let query = db.query(sql, async (err, results) => {
        if(err) throw err;
        // console.log(results);
        if(results[0].password == req.body.password){
            let token = generateToken();
            if(results[0].token){
                res.send(results[0].token)
            }else{
                let updatetoken = `UPDATE account SET token = \'${token}\' WHERE username = \'${req.body.username}\'`
                let query = await db.query(updatetoken, (err, results) => {
                    if(err) throw err;
                    console.log(results)
                    console.log("update success")})
                res.send(token);
            }
        }else{
            throw "wrong password"
        }
    });
}

module.exports = {registerAccount, getAllUser, getUserByUsername, login}