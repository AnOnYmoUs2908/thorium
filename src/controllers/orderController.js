// const {count} = require("console");
// const orderModel= require("../models/orderModel")
// const userModel= require("../models/userModel")
// const productModel= require("../models/productModel")
// const {find} = require("../models/userModel");
// const { privateDecrypt } = require("crypto");

// const createorder= async function (req, res) {
//     let UserId = req.body.userId
//     let user = await userModel.findById(UserId) 
//     if (!user) {
//         res.send("Invalid User Id")
//     }
//     let ProductId = req.body.productId
//     let product = await userModel.findById(ProductId) 
//     if (!product) {
//         res.send("Invalid Product Id")
//     } 
//     else {  
//         const isFreeAppUser = req.headers["isfreeappuser"]
//         if (isFreeAppUser === "true"){
//             res.send({msg : savedData})
//         }
//         else {
//            let userBalance =  await userModel.findById(balance)
//            let productPrice = await productModel.findById(price)
//             if (isFreeAppUser === "false"){
//                 if (userBalance > productPrice){
//                     let amount = req.body.amount
//                 }
//                 else (userBalance < productPrice){
//                     res.send("User has insufficient balance")
//                 }

//             }

//         }
//     }

//     let data= req.body
//     let savedData= await orderModel.create(data)
//     res.send({msg: savedData})
// }



// module.exports.createorder = createorder
