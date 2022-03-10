const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
 try {
    let data = req.body;
  let savedData = await userModel.create(data);
   res.status(201).send({ msg: savedData });
 }
 catch (err){
   console.log(err)
   res.status(500).send({msg : " Server Error" , error: err.message})
 }
};

const loginUser = async function (req, res) {
 try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
 }
 catch(err){
   res.status(500).send({msg : " Server Error" , error : err.message})
 }
  };
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
 

 const getUserData = async function (req, res) {
try {
 let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
 if (!userDetails)
   return res.status(404).send({ status: false, msg: "No such user exists" });

 res.status(200).send({ status: true, data: userDetails });
}
catch (err){
  res.status(500).send({msg : " Server Error" , error : err.message})
}
};
// // If a token is present then decode the token with verify function
  // // verify takes two inputs:
  // // Input 1 is the token to be decoded
  // // Input 2 is the same secret with which the token was generated
  // // Check the value of the decoded token yourself
  

  
const updateUser = async function (req, res) {
try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
   if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set : {age: 20}});
  res.status(200).send({ status: true , data: updatedUser });
}
catch(err){
  res.status(500).send({msg : " Server Error" , error : err.message})
}
};
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases


const deleteUser = async function (req, res) {
  try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let deleteData = req.body;
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted : true}});
  res.status(200).send({ status: true , data: deletedUser });
}
catch (err){
  res.status(500).send({msg : " Server Error" , error : err.message})
}
};
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases

const postMessage = async function (req, res) {
  try {
  let message = req.body.message

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //return the updated user document
  return res.status(200).send({status: true, data: updatedUser})
  }
  catch (err){
    res.status(500).send({msg : " Server Error" , error : err.message})
  }
}

 // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
  
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;