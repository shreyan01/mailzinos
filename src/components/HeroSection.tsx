'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center pt-8 pb-20 px-4 text-center gap-6 overflow-hidden bg-[#0a0907]">
      {/* Background Image */}
      <Image
        src="https://i.ibb.co/n8nGxBLz/Untitled-Project.jpg"
        alt="Orange Light Background"
        fill
        priority
        className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />
      {/* Pill label */}
      <div className="mx-auto mb-4 bg-white/10 text-white/80 rounded-full px-6 py-1 text-xs font-medium backdrop-blur-sm border border-white/20 w-fit">For visionaries and trailblazers</div>
      {/* Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight">
        Build the brands of <span className="italic text-orange-400">tomorrow</span>
      </h1>
      {/* Subheadline */}
      <p className="text-lg text-gray-200 max-w-xl mx-auto mb-4">
        We combine strategy, data, and technology to help startups grow with impact. Together, we create digital experiences that truly stand out.
      </p>
      {/* CTA Button */}
      <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg bg-orange-500/90 hover:bg-orange-500/80 text-white flex items-center gap-2 backdrop-blur-md">
        Explore our process
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
        </svg>
      </Button>
      {/* Stats */}
      <div className="flex gap-12 justify-center mt-16">
        <div className="text-center">
          <div className="text-3xl font-bold">100%</div>
          <div className="text-gray-300 text-sm mt-1">Growth guaranteed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">200+</div>
          <div className="text-gray-300 text-sm mt-1">Brands boosted</div>
        </div>
      </div>
    </section>
  );
} 