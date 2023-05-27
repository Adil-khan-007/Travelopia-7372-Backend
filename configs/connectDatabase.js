const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase =  async (req,res)=>{
    return mongoose.connect();
}

module.exports = connectDatabase;