
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { TeamsHeader, TeamsContent1, TeamsContent2 } from "@/components/guides/Teams";

export default function GuidesTeams() {
  return (
    <>
      <Header />
      <main>
        <TeamsHeader />
        <TeamsContent1 />
        <TeamsContent2 />
      </main>
      <Footer1 />
    </>
  );
}
