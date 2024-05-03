
export function StoriesHeader() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">Tales of old</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Stories</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Stories are the life-blood of our community. Learn a little bit about what they are, and how they work.
        </p>
      </div>
    </div>
  )
}

export function StoriesContent1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Noteworthy narratives</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What are stories</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Stories are the content each of our worlds produces for you to read and consume. We sometimes interchange the word &apos;content&apos; for stories, but they mean the same thing. Our worlds have vast histories across entire planets with millions of events.
              </p>
              <p className="mt-8">
                Stories are the windows into our worlds. They serve as many things including, explanations of a world&apos;s history, elucidation of characters and their lives, interpretation of cultures and religions and a whole lot more.
              </p>
            </div>
            <div>
              <p>
                We organise stories into <a href="https://www.backstory.ink/guides/collections" className="text-base leading-7 text-indigo-600">collections</a> to help readers understand how they are tied together. We produce different types of collections to help make it easier to group different types of stories together.
              </p>
              <p className="mt-8">
                Our stories aren&apos;t just narratives with a beginning, middle and end, we include all kinds of other content as well. From diary extracts, magic potion recipes, to in-character travel journals and famous battle re-tellings. Our content types bring all kinds of creatives to our fictional worlds from authors to travel bloggers and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function StoriesContent2() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Breakdown</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Types of collections</h1>
        <p className="mt-6 text-xl leading-8">
          When a new collection is created it is given a type. We use 4 different types to help readers understand what they can expect from the content of a collection. Each type has its nuances, but we hope the terminology is clear enough for readers to understand.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            When we list a collection on our reading platform we always include its type as well. This helps readers know what kind of content they can expect right away and helps them make more intuitive purchasing choices. Helping you purchase the right content to enrich your reading life is always important to us.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Franchise.</strong> When you purchase and read content from a franchise collection, you know you are going to get a macro storyline that continues through each piece of content. It might be a trilogy of novels, or a series of novellas, but you&apos;ll always have a continuous storyline.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Anthology.</strong> Collections of this type are usually a grouping of content along a specific theme. It may be a collection of short stories that take place at a particular point in time of a world&apos;s history, or in a particular region of it. It might be a collection of short stories that are all batte re-tellings from famous battles in the world&apos;s history. There is always a theme.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Experimental.</strong> Collections that are marked as experimental are usually a hotbed of testing. World teams are creative, and will try different things with their content to see how readers feel about it. You might expect to see short-stories in these kinds of collections that are test-beds for potential future franchises. 
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Collection.</strong> If a world team decides that the content they are going to create and publish doesn&apos;t fit into other collection types they will use this type. Don&apos;t expect a continuous storyline, it will most likely be &apos;miscellaneous&apos;.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            We may, over time, introduce new collection types to help improve the clarity of what a specific collection is about. Feedback from our readers and thoughts from our creatives will always help guide us on this path.
          </p>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">If in doubt, try it out</h2>
          <p className="mt-6">
            When we publish content we aim to make it as easy as possible for readers to know what they are likely to expect before purchasing it. At the same time we do encourage you to operate on a policy of &apos;try it out&apos;.
          </p>
          <p className="mt-8">
            We are keenly aware that purchasing content obviously comes with a price, so we endeavour to keep our prices as low as possible to make your reading experience as expansive as possible.
          </p>
        </div>
      </div>
    </div>
  )
}