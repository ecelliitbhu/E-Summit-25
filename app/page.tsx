import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import WSYA from "@/components/WSYA";

export default function Home() {
  return (
    <main className="grid items-center pb-8 pt-6 md:py-10">
      <Button>Click me</Button>
      <WSYA></WSYA>
      <Footer></Footer>
    </main>
  );
}
