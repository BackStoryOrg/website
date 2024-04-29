import { CallToAction } from "@/components/common/CallToAction";
import { CallToAction1 } from "@/components/common/CTA1";
import { Faqs } from "@/components/faqs_page/Faqs";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/landing_page/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction1 />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
