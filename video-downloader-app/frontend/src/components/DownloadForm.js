import React, { useState } from 'react';

const DownloadForm = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [quality, setQuality] = useState('720p');
    const [downloadLink, setDownloadLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send video URL and quality to the backend
        const response = await fetch('/api/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoUrl, quality })
        });

        const data = await response.json();
        setDownloadLink(data.downloadLink);  // Set the download link
    };

    return (
        <div>
            <h1>Video Downloader</h1>
            <form onSubmit={handleSubmit}>
                <label>Paste Video Link:</label><br />
                <input 
                    type="text" 
                    value={videoUrl} 
                    onChange={(e) => setVideoUrl(e.target.value)} 
                    required 
                /><br /><br />
                <label>Choose Video Quality:</label><br />
                <select 
                    value={quality} 
                    onChange={(e) => setQuality(e.target.value)}
                >
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                    <option value="360p">360p</option>
                </select><br /><br />
                <button type="submit">Download</button>
            </form>
            {downloadLink && <a href={downloadLink} download>Download Video</a>}
        </div>
    );
};

export default DownloadForm;
