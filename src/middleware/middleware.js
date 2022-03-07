const {nexTick} = require("process")

const middleware = function (req , res , next){
    
    let isFreeAppUser = req.headers.isfreeappuser
    console.log(isFreeAppUser)
    if (isFreeAppUser){
        next()
    }
    else{
       res.send("error")
    }
}
module.exports.middleware = middleware
