# 📝 Simple Blog Project

This is a basic **Express.js blog** where users can:

- View all posts
- Create new posts
- Edit existing posts
- Delete posts

The application uses **EJS templates** for rendering views and **Bootstrap** for basic styling.

---

## 🚀 Functionalities

- **Home Page (`/`)**: View a list of all posts.
- **About Page (`/about`)**: Information about the blog (static page).
- **Contact Page (`/contact`)**: Contact information (static page).
- **New Post (`/post/new`)**: Form to create a new blog post.
- **Add Post (`/post/add`)**: Submits the new post and redirects to home.
- **Edit Post (`/post/edit/:title`)**: Edit an existing post by its title.
- **Save Edits (`/post/edit/:title`)**: Save changes and redirect to home.
- **Delete Post (`/post/delete/:title`)**: Delete a post by its title.

> **Note**: Posts are stored **in-memory** (inside an array). Restarting the server will **clear all posts** .

---

## 🛠️ Installation & Running

1. **Clone the repository**:

```bash
git https://github.com/Ibn-Maged/journaling-app.git
cd journaling-app
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the application**:

```bash
node index.js
```
