const mongoose = require('mongoose');
let User = require('./models/user');

let userRegister = async(req,res)=>{
console.log("Welcome User",req.body);
let user = await User.findOne({ email: req.body.email })
if(!user){
    await User.create(req.body,(err,data)=>{
        if (err) {
            res.send(err)
        }
        else if(data){
            res.status(200).json({message :`User Registered Successfully`})
        }
        else if (!data.email) {
            console.warn("Validation Error")
            res.status(200).json({message : `validation error`})
         }

    })
}
else{
    res.status(200).json({message :`User already Exit`})
}
}

/*List of users*/

module.exports = {userRegister}