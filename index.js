const express = require("express")

const app = express();
const cors = require('cors')

const bp = require('body-parser')
const userRouter = require("./routes/user")
const scheduleRouter = require("./routes/schedule")
const subjectRouter = require("./routes/subject")


const port=process.env.PORT || 3330;
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(userRouter.router);
app.use(scheduleRouter.router);
app.use(subjectRouter.router);
module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3330`)
  })
  