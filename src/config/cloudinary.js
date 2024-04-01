import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;


// const cloudinary = require('cloudinary');

// cloudinary.v2.config({
//   cloud_name: 'ddxqofszy',
//   api_key: '394973268839345',
//   api_secret: 'ZzQ8J4uw2ST1Mso3AenuNd2q694',
//   secure: true,
// });