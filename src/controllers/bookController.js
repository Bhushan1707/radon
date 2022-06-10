const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let autherId=book.author_id

    if(!autherId){return res.send("Auther ID requied")}

    let auther=await authorModel.findById(autherId)
    if(!auther){return res.send("Enter a valid auther ID")}
    
    let publisherId=book.publisher_Id
    if(!publisherId){return res.send("Publisher ID required")}
    let publisher=await publisherModel.findById(publisherId)
    if(!publisher){return res.send("Enter valid Publisher ID")}

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_Id')  
    res.send({data: books})
}
 
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

 