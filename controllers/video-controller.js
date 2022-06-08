const Video = require("../models/videos");
const paginate = require("express-paginate");

const addOne = async (req, res) => {
    try {
        const newRecord = new Video({
            ...req.body,
            createdBy: req.user._id,
        });
        await newRecord.save();
        return res.status(201).json({
            message: "Item Succesfully created",
            success: true
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}



const removeOne = async (req, res) => {
    try {
        const deleted = await Video.findByIdAndDelete(req.param.id);
        if (!deleted) {
            return res.status(404).json({
                message: "Item Not Found",
                success: false
            });
        }
        return res.status(204).json({
            message: "Item Successfully Deleted",
            success: false
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
};

const updateOne = async (req, res) => {
    try {
        await Video.findByIdAndUpdate(req.param.id, req.body);
        return res.status(201).json({
            message: "Item Successfully Updated",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
};

const getAll = async (req, res) => {
    try {
        const [results, ItemCount] = await
            Promise.all([
                Video.find({})
                    .sort({ createdAt: -1 })
                    .limit(req.query.limit)
                    .skip(req.skip)
                    .lean()
                    .exec(),
                Video.count({}),
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
        let item = await Video.findByIdAndUpdate(req.param.id, {
            $inc: { viewsCount: 1 },
        });
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

const getTopVideos = async (req, res) => {
    try {
        let result = await

            Video.find({})
                .sort({ viewsCount: -1 })
                .limit(3)
                .lean()
                .exec()

        return res.status(201).json({

            data: results,

        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
};




module.exports = {
    addOne,
    removeOne,
    updateOne,
    getAll,
    getOne,
    getTopVideos
}












