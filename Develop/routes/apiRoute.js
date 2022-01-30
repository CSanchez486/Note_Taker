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
    
// boolean is used to determine if id matches url parameters
router.delete("/notes/:id", (req, res) => {
    store.remove(req.params.id).then(() => res.json({ok:true})
    .catch((err) => res.status(500).json(err))
});


module.exports = router