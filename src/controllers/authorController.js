const AuthorModel= require("../models/authorModel")
const bookModel=require("../models/bookModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
};

const increseBy10= async function (req, res) {
    let authors = await AuthorModel.find({rating:{$gte:3.5}}).select("_id")
    let updateprice=await bookModel.updateMany({author_id:authors},{$inc:{price:+10}})
    res.send({data:updateprice})
}

module.exports.createAuthor= createAuthor
module.exports.increseBy10= increseBy10 