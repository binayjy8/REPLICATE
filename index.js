const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.listen(port, ()=> {
    console.log("listening to the port: 8080");
});