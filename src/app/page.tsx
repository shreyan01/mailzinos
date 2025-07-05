
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Brand top left */}
      <div className="fixed top-6 left-8 z-50 text-2xl font-bold tracking-tight select-none pointer-events-none">
        Mailzinos
      </div>
      {/* Glassy Navbar */}
      <nav className="sticky top-6 z-40 flex justify-center w-full">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full w-1/2 h-12 flex items-center justify-between px-8 text-sm font-medium transition-all duration-300">
          {/* Removed Mailzinos from here */}
          <div className="flex gap-6">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#how" className="hover:text-cyan-400 transition-colors">How it works</a>
          </div>
          <Button size="sm" className="rounded-full px-4 py-1 text-xs border-white border-1">Sign In</Button>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="min-w-[250px] max-w-xs mx-auto h-full flex flex-col justify-between bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>Accurate Email Finder</CardTitle>
              <CardDescription className="text-gray-400">Find verified emails for any business or professional, powered by advanced algorithms.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-2 pb-4">
              <Image src="/globe.svg" alt="Email Finder" width={40} height={40} />
            </CardContent>
          </Card>
          <Card className="min-w-[250px] max-w-xs mx-auto h-full flex flex-col justify-between bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>Lead Enrichment</CardTitle>
              <CardDescription className="text-gray-400">Get detailed info: company, role, social links, and more for every contact.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-2 pb-4">
              <Image src="/window.svg" alt="Lead Enrichment" width={40} height={40} />
            </CardContent>
          </Card>
          <Card className="min-w-[250px] max-w-xs mx-auto h-full flex flex-col justify-between bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>Pay-As-You-Go</CardTitle>
              <CardDescription className="text-gray-400">Only pay for the leads you need. No subscriptions, no hidden fees.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-2 pb-4">
              <Image src="/vercel.svg" alt="Pay As You Go" width={40} height={40} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-300 mb-4">Buy credits, use them anytime. No monthly commitment.</p>
        <Button variant="outline" size="lg">See Pricing</Button>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>1. Search</CardTitle>
              <CardDescription className="text-gray-400">Enter a domain, company, or name to find leads.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>2. Enrich</CardTitle>
              <CardDescription className="text-gray-400">Get instant enrichment: emails, roles, socials, and more.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader className="items-center text-center pb-0">
              <CardTitle>3. Download & Pay</CardTitle>
              <CardDescription className="text-gray-400">Download your leads and pay only for what you use.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to supercharge your outreach?</h2>
        <p className="text-gray-300 mb-4">Sign up now and get free credits to try Mailzinos.</p>
        <Button size="lg" className="px-8 py-6 text-lg shadow-lg">Start For Free</Button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-zinc-800 mt-8">
        &copy; {new Date().getFullYear()} Mailzinos. Built with Next.js & shadcn/ui.
      </footer>
    </div>
  );
}
