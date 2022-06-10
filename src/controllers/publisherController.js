const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let data = req.body
    let bookCreated = await publisherModel.create(data)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}
const updateHardCover=async function(req,res){
    let data=await publisherModel.find({name:"HarperCollins"}).select("_id")
    let data2=await publisherModel.find({name:"Penguin"}).select("_id")
    let UpdateHardCover=await bookModel.updateMany({publisher_Id:data},{$set:{isHardCover:true}})
    let UpdateHardCover2=await bookModel.updateMany({publisher_Id:data2},{$set:{isHardCover:true}})
    res.send({msg:UpdateHardCover,UpdateHardCover2})
}

module.exports.createPublisher=createPublisher 
module.exports.getBooksData=getBooksData
module.exports.updateHardCover=updateHardCover