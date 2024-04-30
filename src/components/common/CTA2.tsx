import Image from "next/image";

import { Button } from "@/components/common/Button";

export function CallToAction2() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">Succeed at fiction</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ready to explore?</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your next story or adventure is waiting to be created. Sign up now to start building your world and join a community of like-minded creators. The only limit is your imagination.
        </p>
      </div>

      <form
          name="contact2"
          method="post"
          data-netlify="true"
          className="grid place-items-center mt-6"
        >
          
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
            />
            <select
              className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
              id="preference"
              name="preference"
            >
              <option value="">Interest</option>
              <option value="manager">World Manager</option>
              <option value="author">Author</option>
              <option value="builder">Builder</option>
              <option value="editor">Editor</option>
            </select>
            <button
              className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
              type="submit"
            >
              Add Me
            </button>
          </div>
        </form>
    </div>
  )
}
