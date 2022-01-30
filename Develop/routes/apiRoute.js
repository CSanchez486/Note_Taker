const router = require("express").Router;
const store = require("../db/store");

 
router.get("/notes", (req, res) => {
   store.getNotes().then((notes) => {
       return res.json(notes);
   })
});

router.post("/notes", (req, res) => {
    // body if pushed into db template if json response is received
    store.push(req.body);
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