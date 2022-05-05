const express = require("express");
const schedukeController = require("../controller/scheduleController")

router = express.Router();

router.get("/getallsbyid/:id", schedukeController.getAllScheduleById);

router.post("/addschedule", schedukeController.addSchedule);

router.put("/editschedule", schedukeController.editSchedule);

router.delete("/deleteschedule/:id", schedukeController.deleteSchedule);


exports.router = router;