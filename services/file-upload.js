const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


  require('dotenv').config();


aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEYID,
    region: 'us-east-2'
});

const s3 = new aws.S3();
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'mymo-secure-content',
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + Math.random());
    }
  })
});

module.exports = upload;