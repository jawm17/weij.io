const express = require("express");
const imageRouter =  express.Router();

const upload = require("../services/file-upload");

const singleUpload = upload.single("image");

imageRouter.post("/image-upload", function(req, res) {

    singleUpload(req, res, function(err){
        return res.json({"imageUrl": req.file.location});
    });
});

module.exports = imageRouter;