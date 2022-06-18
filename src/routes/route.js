const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WhetherController= require("../controllers/whtherController")
const memeController=require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistById",CowinController.getByDistrict)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

//APIS FOR WHETHER
router.get("/LondonWhether",WhetherController.LondonWhether)
router.get("/citysByTemp",WhetherController.citysByTemp)
//-----------------Meme Controller-------------------

router.get("/getAllMeme",memeController.getAllMeme)
router.post("/memeEdit",memeController.memeEdit)



module.exports = router;