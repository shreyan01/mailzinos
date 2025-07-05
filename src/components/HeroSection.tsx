'use client';

import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { GridSmallBackgroundDemo } from '@/components/ui/grid-small';
import { Spotlight } from '@/components/ui/spotlight';

const herosectionText = {
  "Demo Day": "Demo Day",
  "Pitch Deck": "Pitch Deck",
  "Product Launch": "Product Launch",
  "Sales Deck": "Sales Deck",
  "Marketing Campaign": "Marketing Campaign",
  "Customer Support": "Customer Support",
  "Internal Tools": "Internal Tools",
  "Data Analysis": "Data Analysis",
};

export default function HeroSection() {
  return (
    <section className="top-relative flex-1 flex flex-col items-center justify-center pt-8 pb-20 px-4 text-center gap-6 overflow-hidden min-h-screen">
      {/* Orange Spotlight and Grid Background */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Spotlight fill="#f97316" className="opacity-80 top-0 left-0 absolute translate-x-[-30%] translate-y-[-30%]" />
        <Spotlight fill="#f97316" className="opacity-40 top-0 left-80 absolute translate-x-[0%] translate-y-[-40%]" />
        <GridSmallBackgroundDemo />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Pill label */}
        <div className="mx-auto mb-4 bg-white/10 text-white/80 rounded-full px-6 py-1 text-xs font-medium backdrop-blur-sm border border-white/20 w-fit">For visionaries and trailblazers</div>
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight mb-8">
          Generate Fake Seed Data for - <FlipWords words={Object.values(herosectionText)} className="italic text-orange-400" />
        </h1>
        {/* Subheadline */}
        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6">
          Ruberic creates production-like dummy data using your SQL or JSON schema. Foreign keys, enums, relationships — all handled automatically.
        </p>
        {/* CTA Button */}
        <Button size="lg" className="group rounded-full px-8 py-6 text-lg shadow-lg bg-orange-500/90 hover:bg-orange-500/80 text-white flex items-center gap-2 backdrop-blur-md">
         Upload Your Schema & Generate Data
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
        </svg>
        </Button>
      </div>
    </section>
  );
} 