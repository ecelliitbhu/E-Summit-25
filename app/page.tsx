// "use client";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/About/about";
import WSYA from "@/components/WSYA/WSYA";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";

import CTA from "@/components/CTA";
import CustomSlider from "@/components/CustomSlider";

export default function Home() {
  
  return (
    <section className="pb-8 pt-6 md:py-10">
      <main className="grid items-center px-2 sm:px-6">
        <Hero />
        <Stats />
        <CTA />
        <CustomSlider
  heading="What our Participants speaks for us?"
  gradientText="Participants speaks"
  slidesData={[
    { name: "Participant 1", description: "Frontend Developer", post: "I like Ecell very much and also fascinated by Esummit. I really enjoyed in the event and participated in various competitions and events", img: "/images/profile1.jpg" },
    { name: "Participant 2", description: "Graphic Designer", post: "I like Ecell very much and also fascinated by Esummit. I really enjoyed in the event and participated in various competitions and events", img: "/images/profile2.jpg" },
    { name: "Participant 3", description: "UI/UX Designer", post: "I like Ecell very much and also fascinated by Esummit. I really enjoyed in the event and participated in various competitions and events", img: "/images/profile3.jpg" },
    { name: "Participant 4", description: "Software Engineer", post: "I like Ecell very much and also fascinated by Esummit. I really enjoyed in the event and participated in various competitions and events", img: "/images/profile4.jpg" },
    { name: "Participant 5", description: "Product Manager", post: "I like Ecell very much and also fascinated by Esummit. I really enjoyed in the event and participated in various competitions and events", img: "/images/profile5.jpg" },
  ]}
  uniqueClass="participants-slider"
/>



<CustomSlider
  heading="Sponsors"
  gradientText="Sponsors"
  slidesData={[
    { img: "/images/sponsor1.png" },
    { img: "/images/sponsor2.png" },
    { img: "/images/sponsor3.png" },
    { img: "/images/sponsor4.png" },
    { img: "/images/sponsor5.png" },
  ]}
  slidesPerView={4}
  coverflowEffect={{ modifier: 0.5, depth: 50 }}
  uniqueClass="sponsors-slider"
/>


        <About />
        <WSYA />
        <MarqueeComponent />
        <FAQ />
      </main>
    </section>
  );
}
