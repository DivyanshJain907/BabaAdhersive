'use client';

import Demo from '@/components/blocks/scroll-expansion-demo';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-grow -mt-16 md:-mt-20">
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
