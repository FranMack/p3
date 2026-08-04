import { AboutUs } from "@/components/about-us/aboutUs";
import { Clients } from "@/components/clients/clients";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/custom-ui/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Hero } from "@/components/hero/hero";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { Problem } from "@/components/problem/problem";

import { Navbar } from "@/components/custom-ui/navbar";

import { WhatsappButton } from "@/components/custom-ui/whatsapp-button";
import { Sectors } from "@/components/sectors/sectors";

import { Services } from "@/components/services/services";
import { Specs } from "@/components/specs/specs";
import { Vehicles } from "@/components/vehicles/vehicles";
import { WhyUs } from "@/components/why-us/why-us";

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
