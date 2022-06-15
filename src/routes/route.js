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
router.get("/users/:userId",middlware.authUser,userController.getUserData)

router.put("/users/:userId",middlware.authUser, userController.updateUser)
router.delete("/users/:userId",middlware.authUser, userController.deleteUser)
module.exports = router;