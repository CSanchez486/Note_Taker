const express = require("express");
const router = require("./htmlRoute");
const app = express();

// gets api/notes 
router.gets("/notes") function (req, res) {
  
    

// note is db.json 

//returns saved notes as json

// allows for the router module to be exported to other files
module.exports = router