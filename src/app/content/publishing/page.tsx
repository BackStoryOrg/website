
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { PublishingHeader, PublishingContent1, PublishingContent2 } from "@/components/content/Publishing";

export default function ContentPublishing() {
  return (
    <>
      <Header />
      <main>
        <PublishingHeader />
        <PublishingContent1 />
        <PublishingContent2 />
      </main>
      <Footer1 />
    </>
  );
}
