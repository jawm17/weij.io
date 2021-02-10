const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
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
    },
    likes: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Post", PostSchema);