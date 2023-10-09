import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'));

app.get("/", (req , res) => {
    res.render("index.ejs")
});
app.get("/projects", (req , res) => {
    res.render("projects.ejs")
});

app.get("/about", (req , res) => {
    res.render("about.ejs")
});

app.get("/contact", (req , res) => {
    res.render("contact.ejs")
});

app.listen(PORT , ()=>{
    console.log(`Listening on port: ${ PORT }`);
});