
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { FAQsHeader, FAQsWorld, FAQsContent, FAQsPublishing, FAQsTeams } from "@/components/guides/FAQs";

export default function GuidesFAQs() {
  return (
    <>
      <Header />
      <main>
        <FAQsHeader />
        <FAQsWorld />
        <FAQsContent />
        <FAQsPublishing />
        <FAQsTeams />
      </main>
      <Footer1 />
    </>
  );
}
