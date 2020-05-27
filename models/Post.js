const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", PostSchema);