const express = require("express");
const UserModel = require("../configs/UserModel");

const Router = express.Router();

Router.post("/addUser",async (req,res)=>{
    try{
        const data = await UserModel.create(req.body);
         res.send({message : "Successfully Added"})
    }
    catch(err){
         res.status(500).send({message : "Unexpected error"})
    }
})

Router.get("/user",async (req,res)=>{
    try{
        const data = await UserModel.find();
         res.send({data : data})
    }
    catch(err){
         res.status(500).send({message : "Unexpected error"})
    }
})

module.exports = Router;