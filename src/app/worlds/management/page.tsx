
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { ManagementHeader, ManagementContent1 } from "@/components/world/Management";

export default function WorldsManagement() {
  return (
    <>
      <Header />
      <main>
        <ManagementHeader />
        <ManagementContent1 />
      </main>
      <Footer1 />
    </>
  );
}
