const router = require('express').Router();
const { fetchAllBlog, fetchTopBlog, fetchBlogById } = require('../controllers/blogControllers');
const multer = require("multer");

router.post("/all", (req, res) => fetchAllBlog(req, res)); // fetch all blog

router.post("/", (req, res) => fetchTopBlog(req, res)); // fetch top blog

router.post("/id", (req, res) => fetchBlogById(req, res)); // fetch blog by id

module.exports = router;