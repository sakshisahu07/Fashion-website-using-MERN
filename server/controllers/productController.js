const productModel = require("../models/productModel");
const ProductModel =require("../models/productModel")

const productSave=async(req,res)=>{
    const{name,description,category,price,image}=req.body;

    const Product=await ProductModel.create({
        name:name,
        description:description,
        category:category,
        price:price,
        image:image
    })
    res.send(Product);
}

const showProduct=async(req,res)=>{
    const data=await productModel.find();
    res.send(data);
}
const searchProduct=async(req,res)=>{
    let proname=req.query.product;
    console.log(proname);
    const Data=await ProductModel.find({"name":{$regex:proname,$options:'i'}})
    res.send(Data)
}
module.exports={
    productSave,
    showProduct,
    searchProduct
}