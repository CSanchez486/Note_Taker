const util = require("util");
const fs = require("fs");

const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

const uuid = require("uuid/v1");

//create class (Store) w/ same file name 
class Store {
    
    // pulls db as a json file
    read () {
        fs.readFile("./db/db.json", "utf8");
    }
    // notes from db.json are converted string 
    write(notes) {
        fs.writeFile("./db/db.json", json.stringify(notes));
    }df
    
    
    
    // get fs.getNotes > @ db.json & parse
    // add note fs.adNotes
    // remove fs.removeNotes 

};


    // get route > post > delete in apiRoutes.js 
    module.exports = Store