
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
                When a world team creates new content the first thing they do is decide how to organise it. This is where collections come into being. A collection is as you would expect it to be a generic grouping of related content. We chose the term collection rather than series, because there are different ways to group content together.
              </p>
            </div>
            <div>
              <p>
                When a new collection is created it is given a type. We use 4 different types to help readers understand what they can expect from the content of a collection. Those 4 types are <i>Collection, Anthropology, Experimental,</i> and <i>Franchise</i>. Each type has its nuances, but we hope the terminology is clear enough for readers to understand.
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