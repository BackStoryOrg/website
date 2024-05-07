
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
    answer: "No, not at all. We have a concept called 'in-world documents', which are things like diary extracts, battle re-tellings, culture exposés as travel journals and more. There is no limit to the types of content a world's team can create.",
  },
  {
    id: 4,
    question: "Can we change a world's history to suit a potential storyline?",
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
    question: "If I start work on a franchise do I get to finish it?",
    answer: "When it comes to franchises we like to keep story teams together if they work well and like each other. We believe that as creatives you can really infuse your spirit into franchises if you get to start and finish them.",
  },
  {
    id: 8,
    question: "Can I write about saving the world?",
    answer: "We don't do this. For a multiverse world to succeed, you can't give more importance to one franchise over another. Epic stories about good and evil can be regional and still exhibit a level of life and death experience.",
  },
  {
    id: 9,
    question: "Do worlds have a macro-storyline?",
    answer: "We try very hard to avoid this. Backstory worlds are full to the brim with history, cultures, religions and characters in all corners. There are no backwaters in a Backstory world. Franchises should stand on their own two feet and not require a macro or central storyline to succeed.",
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
    question: "Where do you publish content?",
    answer: "At Backstory we exclusively publish content about our worlds on our own reading platform. We have a number of reading features that aren't possible on third-party reading platforms.",
  },
  {
    id: 2,
    question: "What formats do you publish in?",
    answer: "We use our own web format for publishing. There are intrinsic limitations with ePub and PDF formats, which make them unsuitable for publishing our content.",
  },
  {
    id: 3,
    question: "How long does it take to publish content?",
    answer: "Once a story has been written and completed, the publishing process can be achieved in as little as 10 minutes. Once a story has gone through the publishing process all it takes is a single click to push it up onto our reading platform.",
  },
  {
    id: 4,
    question: "What does the publishing process involve?",
    answer: "To make a story ready to be published there's a bit of metadata that needs to be attached to it. A sales blurb, cover art, keywords, and a revenue distribution matrix are all examples of this.",
  },
  {
    id: 5,
    question: "Who handles the publishing of content?",
    answer: "Every piece of content has a manager attached to the story team. It is the responsibility of the manager to go through the publishing process for each piece of content. So if you're the author, editor or builder, don't worry, you only have to handle your part.",
  },
  {
    id: 6,
    question: "Can I publish content I've contributed to on other platforms?",
    answer: "The short answer is no. By working with Backstory you agree that content written about our worlds is exclusively published on our platform. Third-party reading platforms are not feature-rich enough to do our content justice.",
  },
  {
    id: 7,
    question: "How do I earn revenue?",
    answer: "If you've contributed to content, when it sells you earn Backstory credits. The number of credits you earn is determined by the size of the contribution you have made. Credits are immediately deposited into your account, there's no need to wait a month or longer to receive them.",
  },
  {
    id: 8,
    question: "What can I do with my earned credits?",
    answer: "You have two choices when it comes to the Backstory credits you've earned. You can use them to get your hands on content put out by other creatives from other worlds that take your fancy. The other option is to create a pay out to your bank account. We will convert your credits into a fiat currency and deposit it into your bank account.",
  },
  {
    id: 9,
    question: "How quickly do pay outs happen?",
    answer: "When you initiate a pay out it happens automatically outside of our ecosystem. It can take a bit of time depending on where you and/or your bank account is in the world. You should have your pay out within 48 hours.",
  },
];

export function FAQsPublishing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Publishing & Sales</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Check out the following FAQs about our publishing and sales systems.
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
    question: "Do worlds have teams?",
    answer: "Yes, teams are an intrinsic part of our worlds. Each world has its own team made up of managers and creatives. Together they are responsible for the creation and publishing of all content about their world.",
  },
  {
    id: 2,
    question: "What roles are there in a world team?",
    answer: "There are a number of different roles within a world team. If you join a world team as a creative you will hold one of the following roles; Author, Editor, Builder, Artist. Each role has its own unique characteristics and expectations.",
  },
  {
    id: 3,
    question: "Who manages Backstory worlds?",
    answer: "Every world has a management team of 4 (sometimes 5) people. The roles are Administrator, Architect, Editor-in-Chief, Chief Author and sometimes Creative Director. Together they are responsible for managing their world and driving the direction of content.",
  },
  {
    id: 4,
    question: "Do I work individually on content?",
    answer: "Nope. Every piece of content created is done by a story team together. One person from each of the world team roles fills a slot on the story's team and brings their expertise to bear. A story team will have a manager, an author, an editor, a builder and sometimes an artist.",
  },
  {
    id: 5,
    question: "Can I be on different world teams concurrently?",
    answer: "Yes, you can. We don't have a problem with this at all, and in fact we do sometimes encourage it. Working on different worlds, even holding different roles, can be very rewarding.",
  },
  {
    id: 6,
    question: "Can I change roles in a world team?",
    answer: "Yes you can. You may start out as an editor, but decide that you want to try your hand at being an author. To achieve this you would speak to your world's management team and get their go ahead. They will update your account and you will be good to go.",
  },
  {
    id: 7,
    question: "What happens if I leave a world team?",
    answer: "If you decide to stop contributing to a world's content you can leave the team. Any contributions you have already made that have been published will still earn you Backstory credits as per usual.",
  },
  {
    id: 8,
    question: "Can I contribute to content if I am a world manager?",
    answer: "You can definitely contribute to content as a world manager, and there may be times where you will have to. However, the role of the management team is important to the success of the world, and that can't be overlooked.",
  },
  {
    id: 9,
    question: "Can I hold multiple roles on a story team?",
    answer: "We don't encourage this concept. We're all about collaboration, and it requires a lot of expertise to put together great content. Team members specialise in their roles for a reason.",
  },
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
