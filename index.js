import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact_us.ejs");
});

app.get("/post/new", (req, res) => {
    res.render("new_post.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})