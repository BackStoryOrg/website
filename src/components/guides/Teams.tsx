
export function TeamsHeader() {
  return (
    <div className="bg-white px-6 py-14 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">Together you will succeed</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Teams</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We talk a lot about teams, so here&apos;s a quick breakdown of what they are and how they work.
        </p>
      </div>
    </div>
  )
}

export function TeamsContent1() {
  return (
    <div className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">Teams and more teams</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What are teams</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Worlds</p>
              <p>
                When thinking about worlds we often talk about teams. Each Backstory world has a team of people attached to it that we generally call creatives. A team is made up of loads of fantastic people from authors and editors to world-builders, artists and even managers.
              </p>
              <p className="mt-8">
                One of the neat things about our world teams is that they aren&apos;t exclusive. As a creative you can be on more than one world&apos;s team at a time. What&apos;s even more fun is that you could hold a different role on different world teams. You could be an author on one, while being an editor on another.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Stories</p>
              <p>
                When talking about stories we also use the term teams. Each story that gets pitched, developed, written and published has its own team. We sometimes refer to them as sub-teams as well, because they are essentially a team within a team.
              </p>
              <p className="mt-8">
                When it comes to story teams we often get two different methods of working. You&apos;re most likely to get the same creatives working together on multiple stories if they are part of a franchise. However, with standalone content such as short stories or novelettes you could end up working with different people each time. If a group of creatives work well together, a world&apos;s management team is highly likely to keep them together on new content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TeamsContent2() {
  return (
    <div className="bg-white px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Breakdown</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">World team roles</h1>
        <p className="mt-6 text-xl leading-8">
          As we mentioned above, a world&apos;s team is made up of creatives. What we do is organise them into specific roles. There are a few different roles a person can have, but each world has the same default roles. You won&apos;t find unique roles on different world teams.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Each role comes with expectations on what a team member will engage in when they collaborate to create and publish content. Each role is specific and we try hard not to blur the lines.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Managers.</strong> A world team has 4 managers, who together form the world&apos;s management team. They are the Administrator, the Architect, the Editor-in-chief and the Chief Author.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Authors.</strong> Probably the most expected role is that of authors. If you&apos;re an author on a world team you will be doing a lot of writing, but that&apos;s why you&apos;re here so hooray!
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Editors.</strong> Editors are a necessity when it comes to the fiction industry, and their contributions are crucial to the success of world and story teams. Some editors get involved in story ideation, others don&apos;t, but they are always responsible for the quality of the content.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Builders.</strong> A new role that we created at Backstory is that of the builder (world-builder). While our World Building Engine does most of the heavy-lifting, the role of builder is quite unique. We sometimes refer to them as &apos;Loremasters&apos;, because they generally have intimate knowledge of a world&apos;s history and lore.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">Artists.</strong> Artists are the fifth and final role group on a Backstory world. From cover art to character depictions, there is a wealth of opportunities for budding artists to get involved.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            We may, over time, introduce new collection types to help improve the clarity of what a specific collection is about. Feedback from our readers and thoughts from our creatives will always help guide us on this path.
          </p>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">What about story teams?</h2>
          <p className="mt-6">
            A story team is made up of one creative from each of the 5 roles. A manager, author, editor, builder and artist combine to produce each piece of content that a world publishes. Each person plays their part depending on their role, and each has responsibilities to progress the development of the story until it is published.
          </p>
          <p className="mt-8">
            There are also possibilities for a creative to change their role over time within the same world. You might start out as an editor, but eventually want to try your hand at being an author. Roles are not written in stone.
          </p>
        </div>
      </div>
    </div>
  )
}