
import { Footer1 } from "@/components/footer/Footer1";
import { Header } from "@/components/header/Header";
import { LicensingHeader, LicensingContent1, LicensingContent2 } from "@/components/content/Licensing";

export default function ContentLicensing() {
  return (
    <>
      <Header />
      <main>
        <LicensingHeader />
        <LicensingContent1 />
        <LicensingContent2 />
      </main>
      <Footer1 />
    </>
  );
}
