const tagsDataModel = require("../models/tagsDataModel");

const fetchAlltags = async (req, res) => {
    try {
        const tags = await tagsDataModel.find();
        return res
            .status(200)
            .json({ message: "All default tags", tags: tags })
    }
    catch {

    }
}

module.exports = { fetchAlltags };