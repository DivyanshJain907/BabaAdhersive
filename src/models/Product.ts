import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: false, default: 0 },
    category: { type: String, required: true },
    image: { type: String }, // Legacy: single image support
    images: { type: [String], default: [] }, // New: multiple images
    video: { type: String }, // Legacy: single video support
    videos: { type: [String], default: [] }, // New: multiple videos
    specifications: { type: Map, of: String },
    inStock: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
