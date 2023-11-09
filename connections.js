const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    // useUnifiedTopology:true,
    // useNewUrlParser:true
}).then(()=>{
    console.log("_________Mongo DB Atlas Connected_____________________");
}).catch(()=>{
    console.log("_______________Mongo DB Atlas Not Connected______________");
})