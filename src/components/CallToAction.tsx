import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Interested?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Sign up to receive news about the progress of our project and how you can get involved!
          </p>
          <hr>
          <form name="contact" method="post" data-netlify='true'>
            <div className="grid place-items-center">
              <div className="flex gap-4">
                <input 
                  className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600" 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email" 
                />
                <button 
                  className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
                  type="submit"
                >
                  Add Me!
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
