"use client";
import Faqs from "@/components/faq/Faq";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/about";
import Footer from "@/components/Footer";
import WSYA from "@/components/WSYA";
import Hero from "@/components/Hero";
import Gallery from "@/components/gallery/gallery";
import The_card from "@/components/The_card";
export default function Home() {
  return (
    <main className="grid items-center  ">
      <Hero />
      {/*<About />*/}
      <WSYA/>
      {/*<Gallery />*/}
      <The_card />
        <MarqueeComponent />
        <Faqs />
      <Footer />
    </main>
  );
}
