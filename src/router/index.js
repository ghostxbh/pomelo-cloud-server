'use strict';
/**
 * code by PomeloCloud
 */
const express = require('express');
const router = express.Router();
const FileRouter = require('./api/file.router');
const LoggerMiddleware = require('../components/pclogger/logger.middleware');

router.use('/api/file', LoggerMiddleware, FileRouter);

module.exports = router;
