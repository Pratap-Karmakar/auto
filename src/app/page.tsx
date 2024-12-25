import AboutPage from "@/components/AboutPage";
import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import OurServices from "@/components/OurServices";
import { SiteHeader } from "@/components/SiteHeader";


export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <Marquee/>
        <AboutPage/>
        <OurServices/>
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

