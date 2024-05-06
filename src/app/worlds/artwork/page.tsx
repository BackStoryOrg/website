
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { ArtworkHeader, ArtworkContent1, ArtworkContent2 } from "@/components/world/Artwork";

export default function WorldsArtwork() {
  return (
    <>
      <Header />
      <main>
        <ArtworkHeader />
        <ArtworkContent1 />
        <ArtworkContent2 />
      </main>
      <Footer1 />
    </>
  );
}
