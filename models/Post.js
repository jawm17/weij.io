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
    },
    deleted: {
        type: Boolean,
        default: false
    }, 
    user: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        required: true
    },
    tips: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        default: "color-blue"
    }
});

module.exports = mongoose.model("Post", PostSchema);