const express=require("express");
const route=express.Router();

const ProductController=require("../controllers/productController")
route.post("/productsave", ProductController.productSave);
route.get("/showproduct",ProductController.showProduct)
route.get("/showmenproduct", ProductController.menProductDetail);
route.get("/searchproduct",ProductController.searchProduct);
route.post("/productdetail", ProductController.productDetail);
route.post("/shopproduct", ProductController.shopProduct);
module.exports=route;