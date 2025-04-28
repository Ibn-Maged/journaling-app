const posts = [];

const findPost = (title) => posts.find(post => post.title === title);

export const getHome = (req, res) => {
  res.render("index.ejs", { posts });
};

export const getAbout = (req, res) => {
  res.render("about.ejs");
};

export const getContact = (req, res) => {
  res.render("contact_us.ejs");
};

export const getNewPost = (req, res) => {
  res.render("new_post.ejs");
};

export const postAddPost = (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect("/");
};

export const getEditPost = (req, res) => {
  const post = findPost(req.params.title);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("edit_post.ejs", { title: post.title, content: post.content });
};

export const postEditPost = (req, res) => {
  const post = findPost(req.params.title);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
  }
  res.redirect("/");
};

export const deletePost = (req, res) => {
  const index = posts.findIndex(post => post.title === req.params.title);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  res.redirect("/");
};
