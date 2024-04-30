
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { AboutHeader, AboutFirst } from "@/components/about/About";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutHeader />
        <AboutFirst />
      </main>
      <Footer />
    </>
  );
}
