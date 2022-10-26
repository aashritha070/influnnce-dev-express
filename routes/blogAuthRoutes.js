const router = require('express').Router();
const { createBlog, editBlogById, deleteBlogById, fetchBlogByTags } = require('../controllers/blogControllers');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: 'tmp/coverPic',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({
    storage: storage
}).single('coverPic')

router.post('/create', (req, res) => createBlog(req, res)); //create blog

router.post('/edit', (req, res) => editBlogById(req, res)); // update blog

router.post("/delete", (req, res) => deleteBlogById(req, res)); // delete blog

router.post("/tag", (req, res) => fetchBlogByTags(req, res)); // fetch blog by tag 

router.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            uploadCoverPic(req, res)
        }
    })
});

module.exports = router;