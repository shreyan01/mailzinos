
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { SiSupabase, SiFirebase, SiPostgresql, SiMongodb } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Brand top left */}
      <div className="fixed top-6 left-8 z-50 text-3xl font-extrabold italic brand-logo tracking-tight select-none pointer-events-none">
        Ruberic
      </div>
      {/* Glassy Navbar */}
      <nav className="sticky top-6 z-40 flex justify-center w-full">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full w-1/2 h-11 flex items-center justify-between px-3 py-1 text-sm font-medium transition-all duration-300">
          {/* Removed Mailzinos from here */}
          <div className="flex gap-6 items-center pr-6">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#how" className="hover:text-cyan-400 transition-colors">How it works</a>
          </div>
          <HoverBorderGradient containerClassName="ml-2">
            <Button size="sm" className="rounded-full text-xs border-none">Sign In</Button>
          </HoverBorderGradient>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection />
      {/*Integrations Section*/}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Integrates with your favorite <span className="italic font-medium">databases</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">
            Seamlessly connect with the most popular databases and cloud platforms
          </p>
        </div>
        <div className="relative overflow-hidden h-24 bg-zinc-900/20 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-16 animate-scroll opacity-60 py-6">
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Supabase</span>
              <SiSupabase className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">AWS</span>
              <FaAws className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Azure</span>
              <VscAzure className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Firebase</span>
              <SiFirebase className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">PostgreSQL</span>
              <SiPostgresql className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">MongoDB</span>
              <SiMongodb className="w-10 h-10 text-orange-400" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Supabase</span>
              <SiSupabase className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">AWS</span>
              <FaAws className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Azure</span>
              <VscAzure className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">Firebase</span>
              <SiFirebase className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">PostgreSQL</span>
              <SiPostgresql className="w-10 h-10 text-orange-400" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400 font-semibold text-lg">MongoDB</span>
              <SiMongodb className="w-10 h-10 text-orange-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="bg-zinc-900/20 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
          <BoxReveal boxColor="#fb923c" duration={1}>
            <div className="text-left mb-12 pl-0">
              <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What Ruberic Does
              </h2>
              <p className="text-lg text-zinc-400 font-light">
                Ruberic is a tool that helps you manage your database and cloud platforms
              </p>
            </div>
          </BoxReveal>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-zinc-800 mt-8">
        &copy; {new Date().getFullYear()} Ruberic. Built with Next.js & shadcn/ui.
      </footer>
    </div>
  );
}
