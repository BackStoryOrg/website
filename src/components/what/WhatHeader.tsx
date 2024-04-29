
const features = [


  {
    name: 'No more writer&apos;s block',
    description:
      'With thousands of years of history for each world, you will be finding storylines not having to come up with them. Fast-track your success and be a writing hero!',
    href: '#',
  },
  {
    name: 'Shared worlds',
    description:
      'Each of our worlds has a fantastic team of creatives working together to produce stories and other content for public consumption. Collaborate with colleagues and share in the success.',
    href: '#',
  },
  {
    name: 'Write how you like',
    description:
      'From flash fiction, novella franchises, to epics. Backstory provides an immersive and collaborative publishing experience.',
    href: '#',
  },
]

export function WhatHeader() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">The future of fiction</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We build multiverses!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At BackStory we use our bespoke World Building Engine to craft vast and yet intricate fictional worlds and their histories <b>in days!</b> That&apos;s thousands of years of fascinating history across entire worlds ready to be written about.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}