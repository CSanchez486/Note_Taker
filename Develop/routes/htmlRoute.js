const express = require("express").Router();
const router = express.Router();

//express router get the notes from app
router.get("/notes", function (req, res) {
    //joins notes that are sent to notes.html 
    res.send(path.join(__dirname,'.../public/notes.html'))
});

// allows for the router module to be exported to other files
module.exports = router