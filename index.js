const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "malka",
        post: "This is malkangiri"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, ()=> {
    console.log("listening to the port: 8080");
});