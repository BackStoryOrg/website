import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I join BackStory?',
      answer:
        'Yes, you can. We welcome new authors, editors and world builders into our ranks all the time.',
    },
    {
      question: 'Do I have to pay to be a member?',
      answer: 'There is no charge to join our team, neither a one-off nor recurring charge.',
    },
    {
      question: 'How do I apply to join BackStory?',
      answer:
        'To become a member of the BackStory team, first join our Discord server and visit our admissions channel.',
    },
  ],
  [
    {
      question: 'Can I write any story I want?',
      answer:
        'Stories published about BackStory worlds are managed by a world&#39;s management team. You need to consult with the relevant people before a story starts to be developed and written.',
    },
    {
      question:
        'What genres are accepted?',
      answer:
        'We publish all genres of fiction from romance and crime, through to horror and thrillers.',
    },
    {
      question:
        'What settings do BackStory worlds have?',
      answer:
        'Each BackStory world has its own setting. These can range from soft fantasy, to hard fantasy, sci-fi and even steampunk!',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

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
            Here are a few of our frequently asked questions. If you can't find what you're
            looking for, reach out to us on our <a href="https://discord.gg/JqRwbMdnvP" target="_blank">Discord server</a>.
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
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
