const util = require("util");
const fs = require("fs");

const readFromFile = util.promisify(fs.readFile);

const uuid = require("uuid/v1");

//create class (Store) w/ same file name 
class Store {
    
    // fs will read file
    read () {
    fs.readFile("./db/db.json", "utf8");
    
    
    
    
    // write fs.writeFile
    // get fs.getNotes > @ db.json & parse
    // add note fs.adNotes
    // remove fs.removeNotes 

};


    // get route > post > delete in apiRoutes.js 
    module.exports = Store