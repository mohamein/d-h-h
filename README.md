This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<header className="bg-white shadow-sm px-2 py-4 h-[11vh]">
        <nav className="flex items-center justify-between">
          <div className="hidden md:block w-[300px]">
            {/* mobile responsive */}

            <Input
              className="w-full border border-green-600 placeholder:text-green-600"
              placeholder="Search Here.."
              type="text"
            />
          </div>
          <div className="block md:hidden">
            <p className="text-sm text-gray-500 hover:text-gray-800">Open</p>
          </div>

          {/* Profile & Theme */}

          <div className="flex items-center gap-2">
            <span>Theme</span>
            <span className="text-sm font-medium">John Doe</span>
          </div>
        </nav>
      </header>
