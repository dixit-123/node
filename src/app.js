require('dotenv').config();
const express=require('express');
const app=express();
const process=require('process');
const path=require('path');
// const { log } = require('console');
const port=process.env.PORT || 3000;
const ejs=require('ejs');



require('./db/connection')

const Register= require('./model/register');
const staticPath=path.join(__dirname,"../html")
app.use(express.static(staticPath))


// app.engine("html",require("ejs").renderFile);
// app.set("html engine","html")

// app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("views",staticPath)
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
//forms
// app.set('views', path.join(__dirname, 'views'));
//public 
// app.use(express.static(path.join(__dirname, 'public')));



app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/register",(req,res)=>{
    res.render("login")
})
app.get("/login",(req,res)=>{
    res.render("home")
})


app.post("/login",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const user= await Register.findOne({email:email})
        if(user.password===password){
            res.status(201).render("home")
        }else{
        res.status(400).send("Invalid login details");
        }
        
    } catch (error) {
        res.status(400).send('create your account')
        
    }
})


app.post("/register", async (req,res)=>{
try{
    const password= req.body.password;
    const cpassword=req.body.confirmpassword;
    if(password===cpassword){
    
        const Registerdetail=new Register({
            firstname:req.body.firstname,
            phone:req.body.phone,
            email:req.body.email,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        })
        const registerd=await Registerdetail.save();
        res.status(201).render("login");
    
    }
    // else{
        // res.send("invalid detail.please Retry")
    // }
 } catch (error) {
        res.status(400).send(error)
       
    }
 
})

app.listen(port,()=>{
    console.log('server is running')
})