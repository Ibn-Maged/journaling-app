import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs", {posts: posts});
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

app.post("/post/add", (req, res) => {
    const new_post = {title: req.body["title"], content: req.body["content"]};
    posts.push(new_post);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})