const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", Auth.authCheck , userController.getUserData)

router.put("/users/:userId", Auth.authCheck , userController.updateUser)

router.delete("/users/:userId" , Auth.authCheck , userController.deleteUser)
module.exports = router;