const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

// requires db.json to be used 
const db = require("./db/db.json");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// pulls htmlRoute
app.use("/", htmlRoute);

// pulls apiRoute
app.use("/api/", apiRoute);


//starts the server
app.listen(PORT, () =>
    console.log(`Note Taker App is Listening to Port: ${PORT} `)
);