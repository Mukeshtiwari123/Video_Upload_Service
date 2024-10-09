const { exec } = require('child_process');
const path = require('path');

// Controller to download video
exports.downloadVideo = (req, res) => {
    const { videoUrl, quality } = req.body;  // Get the video URL and quality from the request body
    const outputFileName = `video-${Date.now()}.mp4`;  // Generate a unique name for the video
    const downloadCommand = `yt-dlp -f "best[height<=${quality}]" -o "./backend/public/videos/${outputFileName}" ${videoUrl}`;

    // Execute yt-dlp command to download video
    exec(downloadCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Error downloading the video.' });
        }
        const downloadLink = `/videos/${outputFileName}`;  // Create the download link
        res.json({ downloadLink });  // Send the download link to the frontend
    });
};
