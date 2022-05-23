const express = require("express");
const subjectController = require("../controller/subjectController")

router = express.Router();


router.post("/addsubject", subjectController.addSubject);

router.put("/editsubject", subjectController.editSubject)

router.delete("/deletesubject", subjectController.deleteSubject);

router.delete("/subject/delbyscid", subjectController.deleteSubjectByScheduleId);

router.get("/getsubjectbysid/:id", subjectController.getSubjectByScheduleId)




exports.router = router;