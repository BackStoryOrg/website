
import Image from "next/image";
import aboutHowImage from "@/images/aboutHow.jpg";


export function AboutHeader() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">The what, why, and how of Backstory</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Learn a little bit about Backstory including what we are about, why we exist, and how we work.
        </p>
      </div>
    </div>
  )
}

export function AboutWhat() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Get to know us a bit</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Backstory?</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Backstory is a lot of things to different people, but to us it is an idea that provides a solution to an over-saturated fiction industry. The fiction writing industry is one of the hardest to succeed in. The barriers to market have become quite low so that just about anyone can try their hand at it. 
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            This is fantastic because great quality content from all corners of the world can shine through and enrich our lives. But with such an overwhelming amount of content, finding those hidden gems becomes harder and harder.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “In an industry overflowing with content the hardest thing to achieve is being found and heard. The power of a collective voice can cut through the deluge and bring success to many instead of a few.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Cal West</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              We realised that a collective voice is much louder than an individual one, and so its message (and content) can be found more easily. Working collaboratively results in a higher probability of success, which is why you&apos;re in the industry in the first place, success.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Collaborative worlds.</strong> Working on collaborative worlds means your chance of achieving success will come quicker.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Structured worlds.</strong> Our worlds have a management team and a creative team working in sync. Management keeps everyone on track and working towards shared success.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Analytics galore.</strong> It&apos;s not just reviews and ratings anymore. Rich analytics about who your customers are can help you tailor your content to suit your audience. No more &quot;hit and hope&quot;.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              The fiction writing industry is in need of a shake-up. We thought the self-publishing wave would achieve it, but it&apos;s actually caused more problems than solutions. A new way of thinking is necessary to see success find its way into the hands of more creatives.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What are we really about?</h2>
            <p className="mt-6">
              At Backstory, we&apos;re on a mission to prove that creatives have a greater chance of success by working together. We have high hopes for this and we hope you do too. As with any pioneering concept, the first task is to make a perspective adjustment. If you&apos;re curious about what we are doing don&apos;t hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutWhy() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why we exist</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Filling a gap</p>
              <p>
                We know certain groups of people have tried to achieve the shared world concept manually. Unfortunately, without a suitable piece of software they have struggled and eventually fallen away. The concept is too complicated to achieve manually.
              </p>
              <p className="mt-8">
                We searched high and low for a piece of software or a platform that provided teams with a structured way to collaboratively create and publish content. Unfortunately nothing matched our expectations. Shared worlds require unique software, and nothing out there currently exists.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Achieving desirables</p>
              <p>
                We came to the conclusion that the way the industry works is counterproductive to success. As a writer, your aim should always be to see your content up on the big screen, because then you will get a return on your investment. To increase the probability of that we need to work in a way that is desirable to film studios.
              </p>
              <p className="mt-8">
                Film studios and game developers are looking for canons & content that they can really squeeze to get at least 10+ years worth of content out of. Working as an individual it would probably take you at least 10 years to create that amount of content. Working collaboratively turns that into 1 or 2 years.
              </p>
            </div>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Changing perspective</p>
              <p>
                Did you know that as a writer your readers and fans are not overly interested in your storyline? Harry Potter fans don&apos;t want to defeat Voldermort, they just want to be wizards and go to Hogwarts. Game of Thrones fans don&apos;t want to defeat the white walkers, they want to fly around on dragons.
              </p>
              <p className="mt-8">
                The storyline is not the product or brand, the world is. Fans want to <b>live in the world</b>, not live out the storyline. This means that readers are customers of the world. Whichever storyline brings them into a world, they automatically act like repeat customers for all of the world&apos;s other storylines. And the one thing we all know about repeat customers is that it&apos;s 6 times easier to sell to them than to a new customer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutHow() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
  				className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
  				src={aboutHowImage}
  				alt=""
  				width={2560}
  				height={3413}
  				unoptimized
  			/>
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Worlds, brands and teams</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How we work</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              We work in worlds, and each world that we build and populate is a brand in and of itself. We attach a collection of diverse creatives to each world, who work in teams to produce content for publication.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Teams work together on all kinds of content such as franchises and short stories, but also even in-character travel journals and diary extracts. The aim of the team is to create as much quality content of all kinds to keep readers interested and engaged.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Published content from all of our worlds becomes available to read on our unique cross-platform reading app at very competitive prices. No more getting lost on Kindle, Kobo or Smashwords.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Are you an indie publishing house?</h2>
              <p className="mt-6">
                If you have your own indie publishing house then we might be a great opportunity for you. Your entrepreneurial spirit makes you perfectly suitable for Backstory world management. Imagine running a world with a team of 50 creatives all under your roof producing related content. Can you see the marketing and sales potential? Why not have a <a mailto="info@backstoryuniverse.com">chat with us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/*
	Photo by <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Annie Spratt</a> on <a href="https://unsplash.com/photos/men-sitting-in-front-of-their-laptop-computer-MChSQHxGZrQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/

