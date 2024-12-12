const express=require("express")
const app=express();
const mongoose=require("mongoose")
const bodyparser = require('body-parser')
const cors= require("cors");
const AdminRoute=require("./routes/adminRoute")
const ProductRoute=require("./routes/productRoute")
//const paymentRoute = require("./routes/payment");
const paymentRoute=require("./routes/payment");
const userRoute=require("./routes/userRoute")
require("dotenv").config()
const PORT=process.env.PORT||3000
app.use(cors())


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/adminuser",AdminRoute)
app.use("/product",ProductRoute)
app.use("/users", userRoute);
app.use("/api/payment",paymentRoute);

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!")
})

app.listen(8000,(req,res)=>{
    console.log("Server runs on this port")
})

