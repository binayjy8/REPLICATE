const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        username: "malka",
        content: "This is malkangiri"
    },
    {
        id: "2b",
        username: "makhna",
        content: "What are you doing"
    },
    {
        id: "3c",
        username: "Cool",
        content: "Alway keep calm"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    res.send("happy deewali enjoy this");
    res.send("don't give the excuse");
    res.send("cherry finish tender");
    res.send("change yourself self because you should be drive");
});

app.listen(port, ()=> {
    console.log("listening to the port: 8080");
});