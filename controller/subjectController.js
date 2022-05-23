const db = require("../db")

const addSubject= async (req, res) => {
    console.log("add Subject")
    const schedule = {subject_name: req.body.subject_name, period:req.body.period, date: req.body.date, link: req.body.link, schedule_id: req.body.schedule_id}
    // let sql = `insert into account values(${req.body.username}, ${req.body.password}, ${req.body.email})`;
    let sql = `insert into subject set ?`;
    let query = db.query(sql, schedule, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.send("success add subject");
    });
}

const editSubject= async (req, res) => {
    console.log(req.body)
    let updateSubject = `UPDATE subject SET subject_name = \'${req.body.subject_name}\', period = \'${req.body.period}\', date= \'${req.body.date}\', link = \'${req.body.link}\' WHERE subject_id = \'${req.body.subject_id}\'`
    let query = await db.query(updateSubject, (err, results) => {
        if(err) throw err;
        console.log(results)
        console.log("update success")
        res.send("update subject success")})
}

const deleteSubject= async (req, res) => {
    let deleteSchedule = `DELETE FROM subject WHERE subject_id = \'${req.body.subject_id}\'`
    let query = await db.query(deleteSchedule, (err, results) => {
        if(err) throw err;
        console.log(results)
        console.log("delete success")
        res.send("delete subject success")})
}

const getSubjectByScheduleId = async(req, res) => {
    console.log("In subject by id")
    let sql = `SELECT * FROM subject WHERE schedule_id = \'${req.params.id}\'`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.send(results);
    });
}
module.exports = {addSubject, editSubject, deleteSubject, getSubjectByScheduleId}