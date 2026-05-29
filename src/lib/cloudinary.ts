// Cloudinary configuration and utilities for video uploads

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';
export const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'your-upload-preset';

// Function to upload video to Cloudinary
export async function uploadToCloudinary(file: File, resourceType: 'video' | 'image' = 'video'): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('resource_type', resourceType);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

// Function to delete video from Cloudinary
export async function deleteFromCloudinary(publicId: string, resourceType: 'video' | 'image' = 'video'): Promise<boolean> {
  try {
    // Note: For security, deletion should be done from the backend with proper authentication
    // This is a placeholder - implement backend endpoint for actual deletion
    console.log(`Video ${publicId} marked for deletion`);
    return true;
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    return false;
  }
}

// Get public ID from Cloudinary URL
export function getPublicIdFromUrl(url: string): string {
  const parts = url.split('/');
  const fileWithExtension = parts[parts.length - 1];
  return fileWithExtension.split('.')[0];
}
