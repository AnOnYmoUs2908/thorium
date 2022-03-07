const { count } = require("console")
const productModel= require("../models/productModel")

const createproduct= async function (req, res) {
    let data= req.body
 let savedData= await productModel.create(data)
   
 res.send({msg: savedData})
}

// const getproductsData= async function (req, res) {
//     let allproducts= await productModel.find( {authorName : "HO" } )
//     console.log(allproducts)
//     if (allproducts.length > 0 )  res.send({msg: allproducts, condition: true})
//     else res.send({msg: "No products found" , condition: false})
// }


// const updateproducts= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allproducts= await productModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allproducts= await productModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allproducts})
// }

// const deleteproducts= async function (req, res) {
//     // let data = req.body 
//     let allproducts= await productModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allproducts})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createproduct= createproduct
// module.exports.getproductsData= getproductsData
// module.exports.updateproducts= updateproducts
// module.exports.deleteproducts= deleteproducts
