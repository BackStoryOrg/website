
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { PhilosophyHeader, PhilosophyContent1 } from "@/components/philosophy/Philosophy";

export default function Philosophy() {
  return (
    <>
      <Header />
      <main>
        <PhilosophyHeader />
        <PhilosophyContent1 />
      </main>
      <Footer1 />
    </>
  );
}
