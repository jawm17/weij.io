const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    vidSrc: {
        type: String,
        required: true
    },
    thumbSrc: {
        type: String,
        required: false
    },
    thumbCode: {
        type: Number,
        required: false
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
    privileged: {
        type: Array,
        default: []
    },
    tips: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Post", PostSchema);