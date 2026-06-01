'use client';

import { useState, useRef } from 'react';
import { uploadToCloudinary } from '@/lib/cloudinary';

interface VideoUploadProps {
  onVideosChange: (urls: string[]) => void;
  currentVideos?: string[];
}

export default function VideoUpload({ onVideosChange, currentVideos = [] }: VideoUploadProps) {
  const [videos, setVideos] = useState<string[]>(currentVideos);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    setError(null);

    try {
      const uploadedVideos: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        if (!file.type.startsWith('video/')) {
          setError('Only video files are allowed');
          continue;
        }

        // Validate file size (max 100MB)
        if (file.size > 100 * 1024 * 1024) {
          setError('Video size must be less than 100MB');
          continue;
        }

        try {
          const uploadedUrl = await uploadToCloudinary(file, 'video');
          uploadedVideos.push(uploadedUrl);
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : String(err);
          setError(`Failed to upload ${file.name}: ${errorMsg}`);
          console.error('Upload error for', file.name, err);
        }
      }
      
      // Update state and notify parent after all uploads
      const newVideos = [...videos, ...uploadedVideos];
      setVideos(newVideos);
      onVideosChange(newVideos);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveVideo = (index: number) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos);
    onVideosChange(newVideos);
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
        accept="video/*"
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
          {uploading ? 'Uploading...' : '+ Add Videos'}
        </button>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
            {error}
          </div>
        )}

        {/* Video List */}
        {videos.length > 0 && (
          <div className="space-y-2">
            {videos.map((url, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-700 truncate">{`Video ${index + 1}`}</p>
                  <p className="text-xs text-gray-500 truncate">{url}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveVideo(index)}
                  className="ml-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition flex-shrink-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Info Text */}
        <p className="text-xs text-gray-600">
          Upload videos from your computer. Supported formats: MP4, WebM, MOV, AVI. Max size: 100MB per video.
        </p>
      </div>
    </div>
  );
}
