const cloudinary = require('cloudinary').v2;

// Configure your Cloudinary credentials
cloudinary.config({
  cloud_name: 'dstvka3hn',     // Replace with your Cloudinary cloud name
  api_key: '575698851528244',           // Replace with your Cloudinary API key
  api_secret: 's1fP_3GZykLlfg_q4XLSVirqW0M'      // Replace with your Cloudinary API secret
});

module.exports = cloudinary;
