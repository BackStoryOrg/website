
export function CollectionsHeader() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">Keeping content organised</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Collections</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          If you&apos;re looking to learn about how we structure our content then collections is a great place to start. Learn more below.
        </p>
      </div>
    </div>
  )
}

export function CollectionsContent1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Organisation</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What are collections</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                When we started Backstory we took a long hard look at the fiction industry and realised that the way other platforms structure their content could be done better. This awareness birthed the concept of the Backstory collection, with the intention being to make it easier for readers to find their way around our content.
              </p>
              <p className="mt-8">
                When a world team creates new content the first thing they do is decide how to organise it. This is where collections come into being. A collection is as you would expect it to be, a generic grouping of related content. We chose the term collection rather than series, because there are different ways to group content together.
              </p>
            </div>
            <div>
              <p>
                One of the interesting concepts that we have at Backstory is the different types of content our creatives produce. You may be expecting just stories, but there is a wealth of different types of content our teams produce. In-character travel journals, diary extracts, battle reports, in-world religious doctrines, magical potion recipes and more. We&apos;re not just about stories.
              </p>
              <p className="mt-8">
                One of the nifty features we include in our reading platform is the ability to arrange your library into collections and show any missing content you haven&apos;t purchased yet. This helps you avoid missing out on great content that you&apos;re interested in, that you might not have realised has been published.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CollectionsContent2() {
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