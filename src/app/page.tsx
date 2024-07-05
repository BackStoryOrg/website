
import { CallToAction } from "@/components/common/CallToAction";
import { CallToAction2 } from "@/components/common/CTA2";
import { Faqs } from "@/components/faqs_page/Faqs";
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/landing_page/Hero";
import { WhatHeader, WhatContent } from "@/components/landing_page/What";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatHeader />
        <WhatContent />
        <CallToAction2 />
        <Faqs />
        <CallToAction />
      </main>
      <Footer1 />
    </>
  );
}
