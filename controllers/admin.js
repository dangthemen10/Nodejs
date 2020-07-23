var express = require("express");
var router = express.Router();

var user_md = require("../models/user");

router.get("/", function(req, res){
    res.json({"message": "This is Admin Page"});
});


router.get("/signup", function(req, res){
    res.render("signup", {data: {}});
})

router.post("/signup", function(req, res){
    var user = req.body;

    if(user.email.trim().length == 0){
        res.render("signup", {data: {error: "Email is requierd"}});
    }
    if(user.passwd != user.repasswd && user.passwd.trim().length != 0){
        res.render("signup", {data: {error: "Password is not match"}});
    }

    user = {
        email: user.email,
        password: user.passwd,
        first_name: user.firstname,
        last_name: user.lastname
    };

    user_md.addUser(user);

    var result = user_md.addUser(user);
    if(result){
        res.render("signup", {data: {error: "Sai roi"}});
    }else{
        res.json({message: "Insert thanh cong"});
    }
})
module.exports = router;