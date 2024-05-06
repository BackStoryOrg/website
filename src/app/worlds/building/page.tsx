
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { BuildingHeader, BuildingContent1, BuildingContent2 } from "@/components/world/Building";

export default function WorldsBuilding() {
  return (
    <>
      <Header />
      <main>
        <BuildingHeader />
        <BuildingContent1 />
        <BuildingContent2 />
      </main>
      <Footer1 />
    </>
  );
}
