import { Button } from "@/components/ui/button";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="grid items-center pb-8 pt-6 md:py-10">
      <Button>Bhai aaj ka kyaa scene hai?</Button>
      <MarqueeComponent></MarqueeComponent>
      <Footer></Footer>
    </main>
  );
}