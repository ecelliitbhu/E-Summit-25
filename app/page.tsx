'use client'
import Faqs from "@/components/faq/Faq"
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/about";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Gallery from "@/components/gallery/gallery"
export default function Home() {
  return (
    <main className="grid items-center  ">
        <Hero/>
        <MarqueeComponent/>
        <About/>
        <Gallery />
        <Faqs/>
        <Footer/>
    </main>
  );
}

