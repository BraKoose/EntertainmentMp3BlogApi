const { Schema, model } = require("mongoose")

const VideoSchema = new Schema(
    {


        videoID: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        viewCount: {
            type: Number,
            default: 0,
        },

    },

    { timestamps: true }

);


module.exports = model("Video", VideoSchema);