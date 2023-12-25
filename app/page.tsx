"use client";
import Faqs from "@/components/faq/Faq";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/about";
import Footer from "@/components/Footer";
import WSYA from "@/components/WSYA/WSYA";
import Hero from "@/components/Hero";
import Gallery from "@/components/gallery/gallery";

import The_card from "@/components/EventsCard";

import EventsCard from "@/components/EventsCard";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <main className="grid items-center">
        <Hero />
        {/*<About />*/}
        <WSYA />
        {/*<Gallery />*/}
        <MarqueeComponent />
        {/*<The_card />*/}
        <CTA />
        <Faqs />
        <Footer />
      </main>
    </section>
  );
}
