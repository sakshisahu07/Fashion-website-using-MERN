const express=require("express");
const route=express.Router();
const AdminController=require("../controllers/adminController")

route.post("/usercheck",AdminController.admindataCheck)

module.exports=route;