//const {nexTick} = require("process");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authCheck = function (req , res , next){
 //check the token in request header
    //validate this token

  try {
      let token = req.headers["x-auth-token"];
   // if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });

      next()
    }
catch (err) {
  res.status(500).send({msg : "Server Request" , error : err.message})
}
}

const authorise = function(req, res, next) {
 try {
    // comapre the logged in user's id and the id in request-:

  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  next()
}
catch (err) {
  res.status(500).send({msg : "Server Error" , error : err.message})
}
}

module.exports.authCheck = authCheck;
module.exports.authorise = authorise;