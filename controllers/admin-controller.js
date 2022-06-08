const User = require("../models/user");
const paginate = require("express-paginate");
const { register } = require("./auth-controller");


const getAll = async (req, res) => {
    try {
        const [results, ItemCount] = await
            Promise.all([
                User.find({})
                    .sort({ createdAt: -1 })
                    .limit(req.query.limit)
                    .skip(req.skip)
                    .lean()
                    .exec(),
                User.count({}),
            ]);
        const pageCount = Math.ceil(itemCount / req.query.limit);
        return res.status(201).json({
            object: "list",
            has_more: paginate.hasNextPages(req)(pageCount),
            data: results,
            pageCount,
            itemCount,
            currentPage: req.query.page,
            pages: paginate.getArrayPages(req)(3, pageCount),
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const getOne = async (req, res) => {
    try {
        const item = await User.findById(req.param.id);
        if (item) {
            return res.status(200).json(item);
        }
        return res.status(404).json({
            message: "Item Not Found",
            success: false
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
};



module.exports = {
    getAll,
    getOne
}












