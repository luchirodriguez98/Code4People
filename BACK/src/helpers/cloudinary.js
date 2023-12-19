import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API, 
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
  });


async function uploadImage (imagenPath) {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imagenPath);

      return result;
      

    } catch (error) {
      return {
        error: error.message
      }
    }
};

export { uploadImage };
