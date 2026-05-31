'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: '/mix.mp4',
    poster:
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1280&auto=format&fit=crop',
    background:
      '/pannel.jpg',
    title: 'Baba Adhesive: WPC, PVC & Panel Solutions',
    date: 'Premium Bonding Technology',
    scrollToExpand: 'Scroll to Explore Our Complete Product Range',
    about: {
      overview:
        'Baba Adhesive delivers premium adhesive solutions engineered for modern construction and manufacturing. Our product line includes Panel Glue+, WPC Adhesive, and PVC Adhesive - each formulated for superior bonding, durability, and performance. Whether you\'re working with WPC decking, PVC pipes, architectural panels, or furniture assembly, Baba Adhesive provides the reliability professionals demand.',
      conclusion:
        'Trust Baba Adhesive for your most critical bonding applications. From WPC composite materials to PVC installations and panel fixing projects, our adhesives deliver fast-setting bonds, weather resistance, and long-lasting performance. Discover why contractors, manufacturers, and builders across the region choose Baba Adhesive.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1280&auto=format&fit=crop',
    background:
      '/pannel.jpg',
    title: 'Specialized Industrial Adhesive Range',
    date: 'WPC • PVC • Panel Glue+',
    scrollToExpand: 'Scroll to Discover Our Products',
    about: {
      overview:
        'Our comprehensive adhesive portfolio spans multiple applications - Panel Glue+ for general construction and panel fixing, WPC Adhesive for wood-plastic composites and outdoor decking, and PVC Adhesive for pipes, fittings, and plastic materials. Each product is formulated with industrial-grade performance standards and certified quality assurance.',
      conclusion:
        'Baba Adhesive is trusted by furniture manufacturers, construction firms, contractors, dealers, and industrial specialists across the region. Our commitment to quality, innovation, and customer support makes us the preferred choice for bonding solutions that deliver results you can depend on.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>
        Baba Adhesive: Advanced Bonding Solutions
      </h2>
      <p className='text-lg mb-8 text-gray-700 dark:text-gray-300'>
        {currentMedia.about.overview}
      </p>

      <div className='grid md:grid-cols-2 gap-6 mb-8'>
        <div className='bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-blue-600 dark:text-blue-400 mb-3'>
            Our Product Range
          </h3>
          <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
            <li>✓ Panel Glue+ - General Purpose Adhesive</li>
            <li>✓ WPC Adhesive - Wood-Plastic Composites</li>
            <li>✓ PVC Adhesive - Pipes & Plastic Materials</li>
            <li>✓ Panel Fixing Solutions - Architectural Work</li>
          </ul>
        </div>

        <div className='bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3'>
            Why Choose Baba Adhesive
          </h3>
          <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
            <li>✓ Industrial Grade Quality</li>
            <li>✓ Fast Setting Performance</li>
            <li>✓ Weather & Water Resistant</li>
            <li>✓ Trusted by Professionals</li>
          </ul>
        </div>
      </div>

      <p className='text-lg text-gray-700 dark:text-gray-300'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = 'image';
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const Demo = () => {
  const [mediaType, setMediaType] = useState('video');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <ScrollExpandMedia
        mediaType={mediaType as 'video' | 'image'}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as 'video' | 'image'} />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
