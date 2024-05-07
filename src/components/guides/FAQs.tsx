
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
    question: "How many worlds can Backstory have?",
    answer: "There is no limit to the number of worlds we can create and host at Backstory. Our system is capable of handling thousands of worlds very easily.",
  },
  {
    id: 2,
    question: "How are Backstory worlds different?",
    answer: "Each Backstory world has its own setting. It might be fantasy or sci-fi. Inside of that we differentiate between sub-settings such as low fantasy and high fantasy.",
  },
  {
    id: 3,
    question: "How else do you differentiate worlds?",
    answer: "Beyond each world's setting we also apply rules to them. For example we may have two worlds that are both low fantasy settings, but in one of them the deities are real and get involved, while in the other they are only anthropomorphic.",
  },
  {
    id: 4,
    question: "Can I have my own world?",
    answer: "Unfortunately we don't build worlds for individuals because we're all about collaboration and teamwork. But there is nothing stopping you from joining a world's team or even working with us to start a new one.",
  },
  {
    id: 5,
    question: "Do we have to create the world's history ourselves?",
    answer: "Nope, we handle that for you, and it can happen really quickly. Using our World Building Engine we estimate that we can create 10,000 years of intricate world history in about a week.",
  },
  {
    id: 6,
    question: "Is there scope to affect world history creation?",
    answer: "Yes absolutely. We generally built world histories in chunks, such as 500 years at a time. Each time a new chunk is being created the world's team can play around with a whole bunch of settings to turn things on, off or manage the frequency of them.",
  },
  {
    id: 7,
    question: "Who handles the world history creation?",
    answer: "Every Backstory world team has an Architect. The person holding this role is responsible for progressing the world's history. They work in concert with the wider team to make sure that they nudge the World Building Engine in the direction they want.",
  },
  {
    id: 8,
    question: "Can worlds crossover with each other?",
    answer: "As a rule we don't do this. We like worlds to be individual and unique, and be able to stand on their own feet. Crossovers can lead to licensing nightmares if the two worlds are licensed to different third parties.",
  },
  {
    id: 9,
    question: "Can I suggest a new world?",
    answer: "Yes, you can absolutely do that, and we encourage it. If you have a fantastic idea for a unique world that fits into our model please reach out to us directly. Even if you don't want to manage the prospective world and only want to be a creative don't hesitate to reach out.",
  },
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
    question: "Can I suggest new content?",
    answer: "If you're working on one of our worlds you can absolutely suggest new content. We encourage it. Every world has its own pitching system where you can pitch storyline ideas and the team can openly discuss it.",
  },
  {
    id: 2,
    question: "Can I write whatever I want?",
    answer: "Backstory worlds are not free-for-alls. Every world has a structured hierarchy with world managers at the top. Any new content proposed by a team member needs the final agreement of the world's management team.",
  },
  {
    id: 3,
    question: "Does content have to be stories?",
    answer: "No, not at all. We have a concept called 'in-world documents', which are things like diary extracts, battle re-tellings, and culture exposés as travel journals. There is no limit to the types of content a world's team can create.",
  },
  {
    id: 4,
    question: "Can we change this world's history to suit a potential storyline?",
    answer: "As a rule we don't do this. Changing a world's history is complicated, as there are potential ripple effects. The beauty of our worlds is that the history is so long and all corners of the world are developed that your desired storyline will have a place somewhere.",
  },
  {
    id: 5,
    question: "How do you organise content?",
    answer: "We group stories into collections. These can be franchises, anthologies or other formats. A piece of content can only be published if it first belongs to a collection.",
  },
  {
    id: 6,
    question: "What happens if I start a story but can't finish it?",
    answer: "If you've started working on a story and have to drop out your contribution will be noted and you could still take part in the revenue sharing opportunity.",
  },
  {
    id: 7,
    question: "?",
    answer: "",
  },
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
