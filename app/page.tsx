// "use client";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/About/about";
import WSYA from "@/components/WSYA/WSYA";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";

import CTA from "@/components/CTA";

export default function Home() {
  return (
    <section className="pb-8 pt-6 md:py-10">
      <main className="grid items-center px-2 sm:px-6">
        <Hero />
        <Stats />
        <CTA />
        <About />
        <WSYA />
        <MarqueeComponent />
        <FAQ />
      </main>
    </section>
  );
}
