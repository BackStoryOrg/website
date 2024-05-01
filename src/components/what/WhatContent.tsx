
import Image from "next/image";
import whatContent from "@/images/whatContent.jpg";


export function WhatContent() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
      				className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      				src={whatContent}
      				alt=""
      				width={2560}
      				height={3413}
      				unoptimized
      			/>
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Achieve success</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A new perspective</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Writing and publishing, whether through traditional means or self-publishing is not designed for you to succeed. Your content, no matter how good it is, gets lost in the ether, due to over-competition.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                At Backstory we publish all content created about our worlds on our own unique reading platform. No more content disappearing on Kindle, Kobo and Smashwords once it has been published. 
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Readership analytics.</strong> Ever wanted to know who is reading your content so you can tailor future content to your audience? With Backstory you can do just that.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Teamwork.</strong> For each story being developed and written, a team of 4 creatives work together, each filling a specific role. The author, editor, builder and manager work collaboratively to create success.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Managed worlds.</strong> Each of our worlds has a dedicated management team, who determine what content should be produced and when. We have solved the anarchy that can arise from shared worlds.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our bespoke software is perfectly designed for a team of creatives to work collaboratively on a multiverse world. Including features such as interactive <b>time-sensitive</b> maps, AI-written explanations of the world&apos;s lore (so you don&apos;t have to write it yourself), and even a pitching system where team members can suggest ideas for new content and discuss them.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Anything else?</h2>
              <p className="mt-6">
                You may or may not know this but your eventual target partners (film studios and game developers) are actually hunting for multiverse content right now! Come join us, create content and see it adapted for the big screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
	Photo by <a href="https://unsplash.com/@jaredd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jaredd Craig</a> on <a href="https://unsplash.com/photos/view-of-floating-open-book-from-stacked-books-in-library-HH4WBGNyltc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
 */