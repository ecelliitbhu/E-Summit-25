"use client";
import Faqs from "@/components/faq/Faq";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/about";
import Footer from "@/components/Footer";
import WSYA from "@/components/WSYA";
import Hero from "@/components/Hero";
import Gallery from "@/components/gallery/gallery";
import The_card from "@/components/The_card";
import Guestcard from "@/components/guestcard/Guestcard";
export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <main className="grid items-center  ">
        <Hero />
        {/*<About />*/}
        <WSYA />
        {/*<Gallery />*/}
        {/*<Guestcard />*/}
        <The_card />
        <MarqueeComponent />
        <Faqs />
      </main>
      <Footer />
    </section>
  );
}
