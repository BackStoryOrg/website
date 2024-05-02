
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { AboutHeader, AboutWhat, AboutWhy, AboutHow, AboutEnd } from "@/components/about/About";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutHeader />
        <AboutWhat />
        <AboutWhy />
        <AboutHow />
        <AboutEnd />
      </main>
      <Footer1 />
    </>
  );
}
