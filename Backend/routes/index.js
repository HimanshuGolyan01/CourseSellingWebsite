const express = require("express")
const userRouter =  require("./user");
const adminRouter = require("./admin")
const courseRouter = require("./courses")

const router = express.Router()

router.use("/user",userRouter)
router.use("/admin",adminRouter)
router.use("/course",courseRouter)



module.exports = router