const router = require('express').Router();
const { fetchAllBlog, fetchTopBlog, fetchBlogById, fetchBlogByAuthor, fetchBlogBySelectedTags } = require('../controllers/blogControllers');
const multer = require("multer");

router.post("/all", (req, res) => fetchAllBlog(req, res)); // fetch all blog

router.post("/", (req, res) => fetchTopBlog(req, res)); // fetch top blog

router.post("/id/:id", (req, res) => fetchBlogById(req, res)); // fetch blog by id

router.post("/author", (req, res) => fetchBlogByAuthor(req, res)); // fetch blog by author

router.post("/selectedtag", (req, res) => fetchBlogBySelectedTags(req, res)); // fetch blog by tag 

module.exports = router;