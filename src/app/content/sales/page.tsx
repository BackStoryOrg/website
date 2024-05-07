
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { SalesHeader, SalesContent1, SalesContent2 } from "@/components/content/Sales";

export default function ContentSales() {
  return (
    <>
      <Header />
      <main>
        <SalesHeader />
        <SalesContent1 />
        <SalesContent2 />
      </main>
      <Footer1 />
    </>
  );
}
