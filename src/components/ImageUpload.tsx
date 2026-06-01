'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { uploadToCloudinary } from '@/lib/cloudinary';

interface ImageUploadProps {
  onImagesChange: (urls: string[]) => void;
  currentImages?: string[];
}

export default function ImageUpload({ onImagesChange, currentImages = [] }: ImageUploadProps) {
  const [images, setImages] = useState<string[]>(currentImages);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    setError(null);

    try {
      const uploadedImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
          setError('Only image files are allowed');
          continue;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setError('Image size must be less than 5MB');
          continue;
        }

        try {
          const uploadedUrl = await uploadToCloudinary(file, 'image');
          uploadedImages.push(uploadedUrl);
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : String(err);
          setError(`Failed to upload ${file.name}: ${errorMsg}`);
          console.error('Upload error for', file.name, err);
        }
      }
      
      // Update state and notify parent after all uploads
      const newImages = [...images, ...uploadedImages];
      setImages(newImages);
      onImagesChange(newImages);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleAddMore = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        disabled={uploading}
        className="hidden"
      />

      <div className="space-y-4">
        {/* Upload Button */}
        <button
          type="button"
          onClick={handleAddMore}
          disabled={uploading}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {uploading ? 'Uploading...' : '+ Add Images'}
        </button>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
            {error}
          </div>
        )}

        {/* Image Preview Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((url, index) => (
              <div key={index} className="relative group">
                <div className="relative w-full h-32 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src={url}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition font-bold text-sm"
                >
                  ×
                </button>
                <span className="text-xs text-gray-600 mt-1 block truncate">{`Image ${index + 1}`}</span>
              </div>
            ))}
          </div>
        )}

        {/* Info Text */}
        <p className="text-xs text-gray-600">
          Upload images from your computer. Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB per image.
        </p>
      </div>
    </div>
  );
}
