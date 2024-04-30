import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "@/styles/tailwind.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - BackStory",
    default: "BackStory - World-building and story-writing platform",
  },
  description:
    "We build multiverses with you.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
      
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="email" name="email" />
      <select name="preference"></select>
    </form>

    <form name="contact1" netlify netlify-honeypot="bot-field" hidden>
      <input type="email" name="email" />
      <select name="preference"></select>
    </form>

    <form name="contact2" netlify netlify-honeypot="bot-field" hidden>
      <input type="email" name="email" />
      <select name="preference"></select>
    </form>
    
      {children}
      </body>
    </html>
  );
}
