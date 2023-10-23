const mongoose=require('mongoose')
const mySchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },

    confirmpassword:{
        type:String,
        required:true,
        unique:true
    }
})



const Register=new mongoose.model('myCollection',mySchema);

module.exports= Register;