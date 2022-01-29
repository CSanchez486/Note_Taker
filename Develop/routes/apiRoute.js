const router = require("express").Router;
const store = require("../db/dbNotes")

 
router.get("/notes", (req, res) => {
   store.getnotes().then((notes) => {
       return res.json(notes);
   })
});

router.post("/notes", function (req, res) {
    // body if pushed into db template if json response is received
    db.push(req.body);
    res.json(true);
});
    

router.delete("/notes", function (req, res) {
    // boolean if/else statement that will show a 500 status if response is empty
    if (db.length != 0) {
        res.json(true);
    } else {
        res.status(500).json(err);
    }
});


module.exports = router