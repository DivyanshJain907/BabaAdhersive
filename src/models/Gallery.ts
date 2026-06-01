import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema(
  {
    title: { type: String, default: 'Gallery' },
    images: { type: [String], default: [] }, // Array of image URLs
    description: { type: String, default: '' },
  },
  { timestamps: true }
);

export const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);
