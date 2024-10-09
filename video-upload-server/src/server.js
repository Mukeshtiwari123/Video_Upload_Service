const express = require('express');
const videoRoutes = require('./routes/videoRoutes'); // Ensure this path is correct
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Define routes, including default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Middleware to parse incoming requests
app.use(express.json());

// Serve static files from the `uploads/` folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Video upload routes
app.use('/videos', videoRoutes);

// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
