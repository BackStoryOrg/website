
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { ManagementHeader, ManagementContent1, ManagementContent2, ManagementContent3, ManagementContent4 } from "@/components/world/Management";

export default function WorldsManagement() {
  return (
    <>
      <Header />
      <main>
        <ManagementHeader />
        <ManagementContent1 />
        <ManagementContent2 />
        <ManagementContent3 />
        <ManagementContent4 />
      </main>
      <Footer1 />
    </>
  );
}
