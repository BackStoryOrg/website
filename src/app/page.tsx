import { CallToAction } from "@/components/common/CallToAction";
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
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
