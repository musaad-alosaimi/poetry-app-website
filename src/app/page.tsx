import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Process } from "@/components/site/Process";
import { Fields } from "@/components/site/Fields";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Process />
        <Fields />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
