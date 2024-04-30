import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function CallToAction1() {

  const encode = (data) => {
    return Object.keys(data: Record<string, any>)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    const data = {
      email: e.target.email.value,
      preference: e.target.preference.value,
    };

    fetch("/favicon.ico", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact1", ...data }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-blue-600 py-32">
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
            Want to join the future of fiction?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Reach out to us with your preferred role and we will be in touch.
          </p>
          <hr className="my-3" />
          <form
            name="contact1"
            method="post"
            data-netlify="true"
            className="grid place-items-center"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact1" />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
              <select
                className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
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
                Add Me!
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
