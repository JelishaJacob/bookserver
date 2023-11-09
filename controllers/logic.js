const { admins, users, books } = require("../models/collection");

const adminLogin=(req,res)=>{
    const{name,psw}=req.body
    admins.findOne({name,psw}).then(user=>{
        if(user){
            res.status(200).json({
                message:"Login Success",
                status:true,
                statusCode:200
            })
        }
        else{
            res.status(404).json({
                message:"Incorrect Login Details",
                status:true,
                statusCode:404
            })
        }
    })
}

const userReg=(req,res)=>{
    const{email,psw}=req.body
    users.findOne({email,psw}).then(user=>{
        if(user){
            res.status(404).json({
                message:"User Already Exists",
                status:true,
                statusCode:404
            })
        }
        else{
            newUser=new users({email,psw})
            newUser.save()
            res.status(200).json({
                message:"User Registered",
                status:true,
                statusCode:200
            })
        }
    })
}

const userLogin=(req,res)=>{
    const {email,psw}=req.body
    users.findOne({email,psw}).then(user=>{
        if(user){
            res.status(200).json({
                message:"Login Success",
                status:true,
                statusCode:200
            })
        }
        else{
            res.status(404).json({
                message:"Incorrect Login Details",
                status:true,
                statusCode:404
            })
        }
    })
}

const addbook=(req,res)=>{
    const {name,author,title,category,published_year}=req.body
    const newBook=new books({name,author,title,category,published_year})
    newBook.save()
    res.status(200).json({
        message:"Book Added",
        status:true,
        statusCode:200
    })
}



module.exports={adminLogin,userReg,userLogin,addbook}