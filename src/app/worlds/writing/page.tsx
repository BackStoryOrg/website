
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { WritingHeader, WritingContent1, WritingContent2 } from "@/components/world/Writing";

export default function WorldsWriting() {
  return (
    <>
      <Header />
      <main>
        <WritingHeader />
        <WritingContent1 />
        <WritingContent2 />
      </main>
      <Footer1 />
    </>
  );
}
