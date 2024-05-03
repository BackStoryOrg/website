
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { StoriesHeader, StoriesContent1, StoriesContent2 } from "@/components/guides/Stories";

export default function GuidesStories() {
  return (
    <>
      <Header />
      <main>
        <StoriesHeader />
        <StoriesContent1 />
        <StoriesContent2 />
      </main>
      <Footer1 />
    </>
  );
}
