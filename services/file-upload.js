const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config/config');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

aws.config.update({
    secretAccessKey: (config.AWS_A_KEYID + "NOSQE3A"),
    accessKeyId: (config.AWS_S_KEY + "y6j/0TqQ+k"),
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