const express = require('express');
const router = express.Router();
const { downloadVideo } = require('../controllers/downloadController');

// Route for downloading the video
router.post('/download', downloadVideo);

module.exports = router;
