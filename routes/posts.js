import express from 'express';
import {
  getHome,
  getAbout,
  getContact,
  getNewPost,
  postAddPost,
  getEditPost,
  postEditPost,
  deletePost
} from '../controllers/posts_controller.js';

const router = express.Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/post/new", getNewPost);
router.post("/post/add", postAddPost);
router.get("/post/edit/:title", getEditPost);
router.post("/post/edit/:title", postEditPost);
router.get("/post/delete/:title", deletePost);

export default router;
