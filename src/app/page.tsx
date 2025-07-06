
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { SiSupabase, SiFirebase, SiPostgresql, SiMongodb } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
      <section className="flex justify-center items-center min-h-[70vh] w-full">
        <div className="flex justify-center items-center w-full">
          <BentoGrid className="mt-8 max-w-5xl rounded-3xl">
                <BentoGridItem
                  className="md:col-span-2 md:row-span-2 bg-black text-white rounded-3xl"
                  header={<span className="text-4xl">🟦</span>}
                  title={<span className="text-xl font-bold">“Schema → Data” in Seconds</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                        <li>Upload your <b>.sql</b> or <b>.json</b> schema.</li>
                        <li>Get clean, relationally accurate fake data in seconds.</li>
                        <li>Works out of the box. No setup. No hacks.</li>
                      </ul>
                      <div className="mt-3 text-xs text-blue-300 font-semibold">Instant value</div>
                    </>
                  }
                />
                <BentoGridItem
                  className="bg-black text-white rounded-3xl"
                  header={<span className="text-2xl">🟩</span>}
                  title={<span className="font-semibold">SQL-Aware, Not Just Random</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
                        <li>Respects foreign keys, enums, constraints, and types.</li>
                        <li>Not your average Faker script.</li>
                      </ul>
                      <div className="mt-2 text-xs text-green-300 font-semibold">Schema intelligence</div>
                    </>
                  }
                />
                <BentoGridItem
                  className="bg-black text-white rounded-3xl"
                  header={<span className="text-2xl">🟨</span>}
                  title={<span className="font-semibold">Privacy-Safe Testing</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
                        <li>Replace real data with fake, production-grade sets.</li>
                        <li>Perfect for GDPR-safe staging, demos, and UAT.</li>
                      </ul>
                      <div className="mt-2 text-xs text-yellow-200 font-semibold">GDPR & staging</div>
                    </>
                  }
                />
                <BentoGridItem
                  className="bg-black text-white rounded-3xl"
                  header={<span className="text-2xl">🟥</span>}
                  title={<span className="font-semibold">One-Click JSON & SQL Export</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
                        <li>Generate <b>.sql</b> insert statements or structured <b>.json</b> dumps.</li>
                        <li>Ready to seed, share, or test instantly.</li>
                      </ul>
                      <div className="mt-2 text-xs text-red-300 font-semibold">Dev workflow</div>
                    </>
                  }
                />
                <BentoGridItem
                  className="bg-black text-white rounded-3xl"
                  header={<span className="text-2xl">🟪</span>}
                  title={<span className="font-semibold">Works with Any Stack</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
                        <li>PostgreSQL, Supabase, Prisma, or raw SQL — adapts to your workflow.</li>
                        <li>No lock-in.</li>
                      </ul>
                      <div className="mt-2 text-xs text-purple-300 font-semibold">Trust & flexibility</div>
                    </>
                  }
                />
                <BentoGridItem
                  className="bg-black text-white rounded-3xl"
                  header={<span className="text-2xl">🟧</span>}
                  title={<span className="font-semibold">Ship Faster, Safely</span>}
                  description={
                    <>
                      <ul className="list-disc ml-5 text-xs mt-1 space-y-1">
                        <li>Stop wasting time writing manual seeders.</li>
                        <li>Get realistic, safe data for every sprint — instantly.</li>
                      </ul>
                      <div className="mt-2 text-xs text-orange-300 font-semibold">The painkiller pitch</div>
                    </>
                  }
                />
              </BentoGrid>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-zinc-800 mt-8">
        &copy; {new Date().getFullYear()} Ruberic. Built with Next.js & shadcn/ui.
      </footer>
    </div>
  );
}
