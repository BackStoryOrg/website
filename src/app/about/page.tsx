
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { AboutHeader, AboutWhat, AboutWhy, AboutHow } from "@/components/about/About";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutHeader />
        <AboutWhat />
        <AboutWhy />
        <AboutHow />
      </main>
      <Footer />
    </>
  );
}
