const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlware=require("../middleware.js/auth1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlware.authUser,middlware.auther,userController.getUserData)

router.put("/users/:userId",middlware.auth1, userController.updateUser)
router.delete("/users/:userId",middlware.auth1, userController.deleteUser)
router.post("/postUser/:userId/post",middlware.auth1,userController.postMessage)
module.exports = router;