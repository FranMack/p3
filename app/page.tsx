import { AboutUs } from "@/components/about-us/aboutUs";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/custom-ui/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";

import { Navbar } from "@/components/custom-ui/navbar";

import { WhatsappButton } from "@/components/custom-ui/whatsapp-button";
import { Sectors } from "@/components/sectors";

import { Services } from "@/components/services/services";
import { Vehicles } from "@/components/vehicles/vehicles";
import { WhyUs } from "@/components/why-us";

export default function Page() {
  return (
    <div className="min-h-svh bg-alert-foreground ">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Problem />
        <Services />
        <Vehicles />
        <Gallery />
        <Sectors />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
