const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner.model');

router.get("/", function(req,res){
    res.send("hey cult");
})

// if(process.env === "development"){

//     router.post("/create", function(req,res){
//         res.send("hey cult");
//     })
// }

console.log(process.env.NODE_ENV);

module.exports = router;