
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { AccreditationHeader, AccreditationList } from "@/components/accreditation/Accreditation";

export default function Accreditation() {
  return (
    <>
      <Header />
      <main>
        <AccreditationHeader />
        <AccreditationList />
      </main>
      <Footer1 />
    </>
  );
}
