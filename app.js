//setup
const express = require("express");
const app = express();
const PORT = 4000;
// const hbs = require("hbs");

console.log("Absolute path is: ", __dirname);
// app.set("view engine", "hbs");

// app.use(express.static(__dirname + "/public"));
// hbs.registerPartials(__dirname + "/views/partials");








//routes

app.get("/", (req, res) => {
    res.render("home.hbs", {
    });
});


app.get("/about", (req, res) => {
    res.render("about.hbs");
    // res.sendFile(__dirname + "/html/about.html");
});

app.get("/works", (req, res) => {
    res.render("works.hbs");
    // res.sendFile(__dirname + "/html/about.html");
});

app.get("/photo-gallery", (req, res) => {
    res.render("photo-gallery.hbs");
    // res.sendFile(__dirname + "/html/about.html");
});


app.listen(PORT, () => console.log(`Server 🏃 at http://localhost:${PORT}`));




