const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinaryConfig');
const router = express.Router();

// Set up multer without local storage (no 'destination' needed)
const upload = multer({ storage: multer.memoryStorage() });

// Video upload route using Cloudinary
router.post('/uploads', upload.single('video'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload_stream(
            { resource_type: 'video' },
            (error, result) => {
                if (error) {
                    return res.status(500).json({ message: 'Error uploading to Cloudinary' });
                } else {
                    return res.status(200).json({ videoUrl: result.secure_url });
                }
            }
        ).end(req.file.buffer); // Send video data as a buffer stream
    } catch (error) {
        res.status(500).json({ message: 'Error uploading video' });
    }
});

module.exports = router;
