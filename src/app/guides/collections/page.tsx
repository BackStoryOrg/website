
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { CollectionsHeader, CollectionsContent1, CollectionsContent2 } from "@/components/guides/Collections";

export default function GuidesCollections() {
  return (
    <>
      <Header />
      <main>
        <CollectionsHeader />
        <CollectionsContent1 />
        <CollectionsContent2 />
      </main>
      <Footer1 />
    </>
  );
}
