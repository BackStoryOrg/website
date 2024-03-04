import Image from "next/image";

import { Container } from "@/components/common/Container";
import backgroundImage from "@/images/background-faqs.jpg";
import { FaqList } from "@/components/faqs_page/FaqList";

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Here are a few of our frequently asked questions. If you can&apos;t
            find what you&apos;re looking for, reach out to us on our{" "}
            <span style={{ color: "blue" }}>
              <a href="https://discord.gg/JqRwbMdnvP" target="_blank">
                {" "}
                <u>Discord server.</u>
              </a>
            </span>
          </p>
        </div>
        <FaqList />
      </Container>
    </section>
  );
}
