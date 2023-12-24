"use client";
import Faqs from "@/components/faq/Faq";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/about";
import Footer from "@/components/Footer";
import WSYA from "@/components/WSYA";
import Hero from "@/components/Hero";
import Gallery from "@/components/gallery/gallery";
import The_card from "@/components/EventsCard";
export default function Home() {
  return (
    <main className="grid items-center  ">
      <Hero />
      <MarqueeComponent />
      <About />
      <WSYA />
      <Gallery />
      <Faqs />
      <The_card />
      <Footer />
    </main>
  );
}
