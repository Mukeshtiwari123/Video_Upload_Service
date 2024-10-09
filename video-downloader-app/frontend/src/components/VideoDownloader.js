import React, { useState } from 'react';
import axios from 'axios';

const VideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [quality, setQuality] = useState('720p');

  const handleDownload = async () => {
    try {
      const response = await axios.post('http://localhost:5000/download', {
        url: videoUrl,
        quality: quality
      }, {
        responseType: 'blob'
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'video.mp4');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading the video', error);
    }
  };

  return (
    <div>
      <h1>Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <select value={quality} onChange={(e) => setQuality(e.target.value)}>
        <option value="720p">720p</option>
        <option value="480p">480p</option>
        <option value="360p">360p</option>
      </select>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default VideoDownloader;
