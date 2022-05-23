const req = require("express/lib/request");
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
        console.log(results.insertId);
        res.send({sehedule_id : results.insertId});
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
        // console.log(results);
        res.send(results);
    });
}

const getScheduleInfoByCode = async (req, res) =>{
    let subjectDetail;
    let insertIdNew;
    let sql = `select s.*, sc.s_name from schedule sc join subject s using(schedule_id) where sc.code=\'${req.body.code}\'`
    let query = await db.query(sql, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.send(results);
        // subjectDetail = results
        // console.log(subjectDetail)
    });
    // console.log(subjectDetail)
    // const schedule = {s_name: subjectDetail[0].s_name, code: generateCode(), account_id: req.body.account_id}
    // let sql2 = `insert into schedule set ?`
    // let query2 = await db.query(sql2, schedule, (err, results) => {
    //     if(err) throw err;
    //     console.log(results.insertId);
    //     insertIdNew = results.insertId
    // });
    // for(let i = 0;i< subjectDetail.length;i++){
    //     const subject = {subject_name: subjectDetail[i].subject_name, period:subjectDetail[i].period, date: subjectDetai[i].date, link: subjectDetail[i].link, schedule_id: insertIdNew}
    // // let sql = `insert into account values(${req.body.username}, ${req.body.password}, ${req.body.email})`;
    // let sql3 = `insert into subject set ?`;
    // let query3 = await db.query(sql3, subject, (err, results) => {
    //     if(err) throw err;
    //     // console.log(results);
    //     res.send("success add subject");
    // });
    // }
    
    
}

const listSubjectInsert = async (req, res) =>{
    console.log(req.body.subjects)
    const subjects = req.body.subjects
    for(let i = 0;i< req.body.subjects.length;i++){
        const subject = {subject_name: subjects[i].subject_name, period: subjects[i].period, date: subjects[i].date, link: subjects[i].link, schedule_id: req.body.scheduleId}
    // let sql = `insert into account values(${req.body.username}, ${req.body.password}, ${req.body.email})`;
    let sql3 = `insert into subject set ?`;
    let query3 = await db.query(sql3, subject, (err, results) => {
        if(err) throw err;
        // console.log(results);
    });
    }
    res.send("success add subject");
}



module.exports = {addSchedule, getAllScheduleById, editSchedule, deleteSchedule, getScheduleInfoByCode, listSubjectInsert}