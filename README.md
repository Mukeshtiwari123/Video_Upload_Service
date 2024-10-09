# Video_Upload_Service



**Overview**

This project is a Video Upload Service built with **Node.js** and **Express.js** for uploading videos directly to **Cloudinary**. The frontend is a simple **HTML** page styled with **Tailwind CSS**, and video uploads are handled via **Multer** and the **Cloudinary** API. It supports uploading large files (in GBs) efficiently using Cloudinary's chunked upload feature.



**Features**


**1.** Upload videos directly to Cloudinary for cloud storage and streaming.

**2.** Fast and efficient uploads for large video files.

**3.** Tailwind CSS for responsive and clean UI styling.

**4.** Simple success and error messages after file upload.





**Tech Stack**



**1. Frontend:** HTML, Tailwind CSS, JavaScript

**2. Backend:** Node.js, Express.js, Multer

**3. Cloud Storage:** Cloudinary



**Setup**

**1. Clone the Repository:**


**git clone https://github.com/your-username/video-upload-server.git**
**cd video-upload-server**



**2. Install Dependencies:**


**npm install**



****3.Configure Cloudinary: Create a .env file with:****


**CLOUDINARY_CLOUD_NAME=your-cloud-name**

**CLOUDINARY_API_KEY=your-api-key**

**CLOUDINARY_API_SECRET=your-api-secret**


**4. Run the Server:**

**npm start**




**Usage**

1. Visit **http://localhost:3000/public/index.html**, select a video, and click "Upload."

2. View the uploaded video URL or check Cloudinary for the file.


**Future Enhancements**

1. Add a progress bar for uploads.
2. Validate file formats and sizes.

