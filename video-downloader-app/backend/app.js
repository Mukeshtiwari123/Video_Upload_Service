const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');  // YouTube downloader
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Your download endpoint
app.post('/download', (req, res) => {
    const { url, quality } = req.body;

    // Logic to handle video downloading based on URL and quality
    // This is a placeholder; implement your logic to fetch the video download URL.
    const downloadUrl = `http://example.com/downloaded_video_${quality}.mp4`;
});
app.post('/download', async (req, res) => {
  const { url, quality } = req.body;

  try {
    const videoStream = ytdl(url, {
      quality: quality === '720p' ? 'highestvideo' : 
               quality === '480p' ? 'medium' : 
               'lowestaudio',
    });

    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
    res.setHeader('Content-Type', 'video/mp4');

    videoStream.pipe(res);
  } catch (error) {
    console.error('Error fetching the video:', error);
    res.status(500).json({ error: 'Failed to download the video' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
