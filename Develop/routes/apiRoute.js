const router = require("express").Router;
const store = require("../db/store");

//gets notes response from store then return json
router.get("/notes", (req, res) => {
   store.getNotes().then((notes) => {
       return res.json(notes);
   })
   .catch((err) => res.status(500).json(err))
});

// adds notes from body to json
router.post("/notes", (req, res) => {
    store.addNotes(req.body).then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
});
    

router.delete("/notes.id", (req, res) => {
    // boolean if/else statement that will show a 500 status if response is empty
    if (db.length != 0) {
        res.json(true);
    } else {
        res.status(500).json(err);
    }
});


module.exports = router