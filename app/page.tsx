'use client'
import Faqs from "@/components/faq/Faq"
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="grid items-center  ">
        <Hero/>
      <MarqueeComponent></MarqueeComponent>
      <Faqs></Faqs>
      <Footer></Footer>
    </main>
  );
}

