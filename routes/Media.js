const express = require('express');
const mediaRouter = express.Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Post = require('../models/Post');

module.exports = mediaRouter;