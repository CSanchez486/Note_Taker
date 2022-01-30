const util = require("util");
const fs = require("fs");
// deconstructs parsed .json
const { title, text } = note;
// constructs new note using uuid
const newNote = { title, text, id: uuidv1() };

const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

// uuid v1 creates a version 1 with timestamp - creating a unique indicator
const uuid = require("uuid/v1");

//create class (Store) w/ same file name 
class Store {
    
    // pulls db as a json file
    read () {
        fs.readFromFile("./db/db.json", "utf8");
    }
    // notes from db.json are converted string 
    write(notes) {
        fs.writeFromFile("./db/db.json", json.stringify(notes));
    }
    
    getNotes(){
        // returns parsed notes
        return this.read().then((notes)) => {
            let readNotes;
            // readNotes will concatenate what is returned into an array
            try {
                readNotes = [].concat(JSON.parse(notes));
            // empty array returned if there is an error
            } catch(err) {
                readNotes = []
            }
            return readNotes;
        }
    }
    addNote(note) {
        // if the title & text are empty then it will throw an error message
        if (!title||!text){
            throw new Error ("Error: Text box cannot be blank. Please enter note to submit")
        }
    
    // getNotes is invoked and turned into a newNote
    return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((latestNotes) => this.write(latestNotes))
        .then(() => newNote);
    }
     
    // 
    removeNote(id) {
        //returns getNotes
        return this.getNotes()
        //notes are filtered into an array - if id doesn't match it is removed
        .then((notes) => notes.filter(note.id !==id))
        // filtered notes are then written into a new filtered note
        .then((Notes) => this.write(filteredNotes));
    }

    }
        
        
    }
    
    
    
    


};


    // get route > post > delete in apiRoutes.js 
    module.exports = Store