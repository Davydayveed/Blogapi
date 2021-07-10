// FileName: index.js
// Import express
const express = require("express");
// Import Body parser
const bodyParser = require("body-parser");
// Import Mongoose
const mongoose = require("mongoose");
// Initialize the app
const app = express();
// Import routes
const apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
//testing
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });
const db = mongoose.connection;
// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");
// Setup server port
const port = process.env.PORT || 4000;
// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express and nodemon"));


// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function() {
    console.log("Running RestHub on port " + port);
});