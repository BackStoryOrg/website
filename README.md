# website

Landing page for backstory.ink

## Getting started

### Local Install

First install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Docker

Alternately, run the dockerfile locally to develop on your machine.  
N.B. Docker must be installed on your system

Open the project in a Terminal on the `website` directory. Build your docker image with:

```bash
docker build -t back-story_website .
```

When that has finished building, run the image:

```bash
docker build --rm -d -p 3000:3000 back-story_website
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

Main landing page info is [src/components/Hero.tsx](src/components/Hero.tsx)

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
