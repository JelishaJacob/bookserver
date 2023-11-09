const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    name:String,
    psw:String
})
const admins=new mongoose.model("admins",adminSchema)

const userSchema=new mongoose.Schema({
    email:String,
    psw:String
})
const users=new mongoose.model("users",userSchema)

const bookSchema=new mongoose.Schema({
    name:String,
    author: String,
    title: String,
    category: String,
    published_year: String,

})
const books=new mongoose.model("books",bookSchema)



module.exports={admins,users,books}

