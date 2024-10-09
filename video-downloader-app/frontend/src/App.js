import React from 'react';
import './App.css'; // If you want to use CSS file for further styling

function App() {
  const downloadVideo = () => {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoQuality = document.getElementById('videoQuality').value;
    const downloadLink = document.getElementById('downloadLink');
    const errorMsg = document.getElementById('errorMsg');
    
    errorMsg.textContent = '';  // Clear previous errors

    if (!videoUrl) {
      errorMsg.textContent = 'Please enter a video URL.';
      return;
    }

    fetch('http://localhost:5000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: videoUrl, quality: videoQuality }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        downloadLink.href = data.downloadUrl;
        downloadLink.style.display = 'block'; // Show the download link
        downloadLink.textContent = 'Click to Download';
      } else {
        errorMsg.textContent = 'Error: Unable to fetch download link.';
        downloadLink.style.display = 'none';
      }
    })
    .catch(err => {
      errorMsg.textContent = 'Error: Unable to connect to server.';
      downloadLink.style.display = 'none';
    });
  };

  return (
    <div className="container">
      <h1>Video Downloader</h1>
      <input type="text" id="videoUrl" placeholder="Paste video URL here" />
      <select id="videoQuality">
        <option value="360p">360p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
      </select>
      <button onClick={downloadVideo}>Download</button>
      <a id="downloadLink" className="download-link" href="#" download style={{ display: 'none' }}>Click to Download</a>
      <div id="errorMsg" className="error"></div>
    </div>
  );
}

export default App;
