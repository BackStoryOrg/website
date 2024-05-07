
export function FAQsHeader() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">Your questions answered</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">FAQs</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Need your questions answered? Our FAQs are here to help. Check out the different aspects of our platform below.
        </p>
      </div>
    </div>
  )
}

const worlds = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "",
  },
  // More questions...
];

export function FAQsWorld() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Worlds</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a look at our frequently asked questions about Backstory worlds. If you can&apos;t find an answer to your question here feel free to reach out to us.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {worlds.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const content = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "",
  },
  // More questions...
];

export function FAQsContent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Content</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Want to know a thing or two about stories and collections on Backstory? Hopefully these FAQs will help.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {content.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const publishing = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "",
  },
  // More questions...
];

export function FAQsPublishing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Publishing</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Check out the following FAQs about our publishing system and structure.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {publishing.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const teams = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "",
  },
  // More questions...
];

export function FAQsTeams() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Teams</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Want to know how we structure world and story teams? These should help.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {teams.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
