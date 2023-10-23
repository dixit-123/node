require("dotenv").config()

const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongoo connected succesfully")
}).catch((e)=>{
    console.log(`mongo not connected and error is ${e}`)
})
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/myDatabase',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("mongoo connected succesfully")
// }).catch((e)=>{
//     console.log(`mongo not connected and error is ${e}`)
// })


