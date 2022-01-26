const router = require("express").Router(); 
// const that will be used as template for notes.html


//express router get the notes from app
router.get("/notes", function (req, res) {
    //joins notes that are sent to notes.html 
    res.send(path.join(__dirname,'.../public/notes.html'));
});

//express router gets all other routes
router.get("*", function (req,res) {
    // then joins the routes to index.html
    res.send(path.join(__dirname, '.../public/index.html'));
});


// allows for the router module to be exported to other files
module.exports = router