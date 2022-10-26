const blogDataModel = require('../models/blogDataModel');

const fs = require("fs");
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

const createBlog = async (req, res) => {
    const blogObj = {
        title: req.body.title,
        content: req.body.content,
        coverPic: req.body.coverPic,
        emailId: req.emailId,
        firstName: req.firstName,
        lastName: req.lastName,
        tags: req.body.tags,
    }
    const newBlog = new blogDataModel(blogObj);
    try {
        const blog = await newBlog.save();
        return res
            .status(200)
            .json({ message: "Successfully published new blog" });

    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err })
    }
}

const editBlogById = async (req, res) => {
    try {
        const blog = await blogDataModel.findById(req.params.id)

        if ((blog) && (blog.emailId === req.emailId)) {
            const blogObj = {
                title: req.body.title,
                content: req.body.content,
                coverPic: req.body.coverPic,
                emailId: req.body.emailId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                tags: req.body.tags,
            }
            try {
                const updateBlog = await blogDataModel.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: blogObj,
                    },
                    { new: true }
                );
                return res
                    .status(200)
                    .json({ message: "Successfully blog updated" });
            }
            catch (err) {
                return res
                    .status(500)
                    .json({ message: err });
            }
        }
        else {
            return res
                .status(401)
                .json({ message: "Unauthorised action" });
        }
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const deleteBlogById = async (req, res) => {
    try {
        const blog = await blogDataModel.findById(req.params.id);

        if ((blog) && (blog.emailId === req.body.username)) {
            try {
                await blog.delete();
                return res
                    .status(200)
                    .json({ message: "Successfully blog deleted" });
            }
            catch (err) {
                return res
                    .status(500)
                    .json({ messaag: err });
            }
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorised action" });
        }
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchBlogById = async (req, res) => {
    try {
        const blog = await blogDataModel.findById(req.params.id);
        return res
            .status(200)
            .json({ message: "Blog meta data by blogId", data: blog });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchBlogByAuthor = async (req, res) => {
    try {
        const blogs = await blogDataModel.find({ emailId: req.body.authorEmailId }).sort({ createdAt: "desc" });
        return res
            .status(200)
            .json({ message: "All blogs by author", data: blogs });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchBlogBySelectedTags = async (req, res) => {
    try {
        let tagsFilter = [req.body.tag]
        const blogs = await blogDataModel.find({ tags: { $in: tagsFilter } }).sort({ createdAt: "desc" });
        return res
            .status(200)
            .json({ message: "All blogs by tags", data: blogs });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchBlogByTags = async (req, res) => {
    try {
        let tagsFilter = req.tags
        const blogs = await blogDataModel.find({ tags: { $in: tagsFilter } }).sort({ createdAt: "desc" });
        return res
            .status(200)
            .json({ message: "All blogs by tags", data: blogs });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchTopBlog = async (req, res) => {
    try {
        blogs = await blogDataModel.find({}, null, { limit: 10 }).sort({ createdAt: "desc" });
        return res
            .status(200)
            .json({ message: "Top 10 blogs meta data", data: blogs });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: err });
    }
}

const fetchAllBlog = async (req, res) => {
    try {
        blogs = await blogDataModel.find();
        return res
            .status(200)
            .json({ message: "All blogs meta data", data: blogs });
    }
    catch (err) {
        return res
            .status(300)
            .json({ message: err });
    }
}

const updateCoverPic = async (req, res) => {

}
module.exports = { createBlog, updateCoverPic, editBlogById, deleteBlogById, fetchTopBlog, fetchBlogBySelectedTags, fetchAllBlog, fetchBlogById, fetchBlogByAuthor, fetchBlogByTags };