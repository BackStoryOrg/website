import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";

const faqs = [
  [
    {
      question: "Can I work with BackStory?",
      answer: `Yes, you can. Our worlds' management teams are always on the look out for new aspiring creatives.`,
    },
    {
      question: "Do I have to pay to join a world's team?",
      answer: `Absolutely not. In fact, you can earn sales commission on content that you have helped to create!'`,
    },
    {
      question: "How do I apply to work with BackStory?",
      answer: `The best way to get started is to join our <span style={{color:'blue'}}><a href="https://discord.gg/JqRwbMdnvP" target="_blank"> <u>Discord server</u></a></span> and announce yourself.`,
    },
  ],
  [
    {
      question: "Can I write any story I want?",
      answer: `Stories published about BackStory worlds are managed by a world's management team. You need to consult with the relevant people before a story starts to be developed and written.`,
    },
    {
      question: "What genres are accepted?",
      answer: `We publish all genres of fiction from romance and crime, through to horror and thrillers.`,
    },
    {
      question: "What settings do BackStory worlds have?",
      answer: `Each BackStory world has its own setting. These can range from low fantasy, to high fantasy, soft sci-fi, hard sci-fi, dystopias and even steampunk and cyberpunk!`,
    },
  ],
  [
    {
      question: "If I write with BackStory can I be published?",
      answer: `All stories written for BackStory worlds are automatically published. If you work with us you will be published.`,
    },
    {
      question: "Can I earn from my work on BackStory?",
      answer: `Whether you are a writer, editor or builder you can earn money from your work in the BackStory universe. We operate a granular revenue-sharing system by which, all team members who contribute to the creation, writing, editing and building of a story earn revenue through sales commission.`,
    },
    {
      question: "",
      answer: ``,
    },
  ],
];

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
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p
                      className="mt-4 text-sm text-slate-700"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
