const db = require("../db")


function generateCode () {
    const result = [];
    const characters = '*/=-$#!@^&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 7; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
   }
   return result.join('');
}

const addSchedule= async (req, res) => {
    console.log("add Schedule")
    const schedule = {s_name: req.body.s_name, code: generateCode(), account_id: req.body.account_id}
    // let sql = `insert into account values(${req.body.username}, ${req.body.password}, ${req.body.email})`;
    let sql = `insert into schedule set ?`;
    let query = db.query(sql, schedule, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.send("success add schedule");
    });
}

const editSchedule = async (req, res) => {
    let updatename = `UPDATE schedule SET s_name = \'${req.body.new_name}\' WHERE schedule_id = \'${req.body.schedule_id}\'`
    let query = await db.query(updatename, (err, results) => {
        if(err) throw err;
        console.log(results)
        console.log("update success")
        res.send("update success")})
    
}

const deleteSchedule = async (req, res) => {
    let deleteSchedule = `DELETE FROM schedule WHERE schedule_id = \'${req.body.schedule_id}\'`
    let query = await db.query(deleteSchedule, (err, results) => {
        if(err) throw err;
        console.log(results)
        console.log("delete success")
        res.send("delete success")})
}

const getAllScheduleById = async (req, res) =>{
    console.log("In schedule by id")
    let sql = `SELECT * FROM schedule WHERE account_id = \'${req.params.id}\'`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
}


module.exports = {addSchedule, getAllScheduleById, editSchedule, deleteSchedule}