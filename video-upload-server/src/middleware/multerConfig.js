const multer = require('multer');
const path = require('path');

// Configure Multer storage to use `uploads/` directory
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads')); // Save files to `uploads/` folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Use current timestamp as filename
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
