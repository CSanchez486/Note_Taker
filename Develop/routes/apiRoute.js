const express = require("express").Router;
const htmlRoute = require("./htmlRoute");
const app = express();
 
app.get("/Develop/notes", function (req, res) {
    //requesting htmlRoute to get notes.html and put into db template
    htmlRoute.getNotes(dbStructure); 
});

app.post("/Develop/notes", function (req, res) {
    //body if pushed into db template if json response is received
    dbStructure.push(req.body);
    res.json(true);
});
    

app.delete("/Develop/notes", function (req, res) {
    // boolean if/else statement that will show a 500 status if response is empty
    if (dbStructure.length != 0) {
        res.json(true);
    } else {
        res.status(500).json(err);
    }
});


module.exports = router