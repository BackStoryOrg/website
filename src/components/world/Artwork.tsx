
export function ArtworkHeader() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">A thousands words at a time</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Artwork</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The visual arts as just as important as the written word. Learn more about how we value artwork in our community.
        </p>
      </div>
    </div>
  )
}

export function ArtworkContent1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Covers and more</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The visual experience</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Reading stories is a past time for many people, but being able to visualise what you&apos;re reading can sometimes be a challenge. Lucky for us there are millions of artists out there in the world, who want to show off their skills. We&apos;re looking for you.
              </p>
              <p className="mt-8">
                One of the great things about creating artwork for fictional worlds is how imaginative and expressive you get to be. From character protraits, to cityscapes to scenes of dragons flying over raging battles, feel free to get carried away.
              </p>
            </div>
            <div>
              <p>
                Artists are part of a world&apos;s team in the same way that writers, editors and builders are. We will usually attach an artist to a story team as well to handle the cover art for publishing. There is an opportunity to revenue share from this method.
              </p>
              <p className="mt-8">
                We also believe that artists should be able to generate revenue for themselves outside of the scope of stories and their cover art. We envision artists being able to create catalogues of artwork for their worlds that can be sold to consumers individually from stories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ArtworkContent2() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Got an idea?</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We&apos;re currently exploring how we can better integrate artists and artwork into our platform. If you have an idea the first step is to <a href="mailto:info@backstoryuniverse.com?subject=Artwork Idea" className="text-base leading-7 text-indigo-600 underline">get in touch</a> with us.
        </p>
      </div>
    </div>
  )
}