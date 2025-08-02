# 24Hour-AI

A modern AI-powered web application built with **Next.js (App Router)**. The project blends **OpenAI**, **Google Generative AI (Gemini)**, and custom utility functions to provide always-on intelligent features.

---

## Table of Contents
1. [Project Status](#project-status)
2. [Tech Stack](#tech-stack)
3. [Repository Setup](#repository-setup)
4. [Environment Variables](#environment-variables)
5. [Development Workflow](#development-workflow)
6. [Testing](#testing)
7. [Directory Structure](#directory-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Status
This repository is under **active development** by Gio (🧑‍💻) and Ada (🤖). Current focus:

* Building a robust `lib/functions` layer of **pure, test-driven utilities** (e.g. `generateUUID`, `getCurrentTimestamp`, `routeToModel`).
* Adding **lightweight CLI tests** in `tests/` executed with [`tsx`](https://github.com/esbuild-kit/tsx) for instant TypeScript execution.
* Integrating external AI clients (`lib/clients/openai`, `lib/clients/google`).

Expect frequent commits while functions & tests stabilise.

---

## Tech Stack
| Layer | Tooling |
|-------|---------|
| Framework | Next.js (App directory) |
| Styling  | TailwindCSS · ShadCN · AceternityUI |
| ORM / DB | Prisma (PostgreSQL) |
| Vector Store | Pinecone (future) |
| Auth | NextAuth |
| AI Providers | OpenAI · Google Generative AI (Gemini) |
| Utility TS Runner | tsx |
| Testing (ad-hoc) | node + tsx scripts |

---

## Repository Setup
Clone and install:

```bash
# 1. Fork in GitHub then clone
$ git clone https://github.com/YOUR_GITHUB_USERNAME/24Hour-ai.git
$ cd 24Hour-ai

# 2. Install dependencies (npm, pnpm, yarn, or bun)
$ npm install
```

> **Note**: The default branch is `main`. Feature work may occur in topic branches and merged via PR.

---

## Environment Variables
Create a `.env` file in the project root:

```env
# AI Providers
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key

# (add DB / auth variables as needed)
```

Next.js automatically loads these for pages & API routes. **Standalone CLI tests** (in `tests/`) load variables with [`dotenv`](https://github.com/motdotla/dotenv) via a top-level `import "dotenv/config"`.

---

## Development Workflow
```bash
# Launch dev server at http://localhost:3000
npm run dev
```

During active utility-coding sessions Gio and Ada follow this loop:
1. **Add / modify** a pure function in `lib/functions`.
2. **Create a minimal test script** in `tests/`.
3. Run instantly with `npx tsx tests/<file>.ts`.
4. Iterate until green; then commit.

This keeps feedback tight without waiting for the full Next.js runtime.

---

## Testing
Current ad-hoc tests:

```bash
npx tsx tests/testUUID.ts           # ✓ generateUUID()
npx tsx tests/testTimestamp.ts      # ✓ getCurrentTimestamp()
npx tsx tests/testRouteToModel.ts   # ✓ routeToModel()
npx tsx tests/testGoogleClient.ts   # ✓ google client init
npx tsx tests/testOpenaiClient.ts   # ✓ openai client init
```

> Formal Jest/Vitest suites will be added once the utility surface stabilises.

---

## Directory Structure (excerpt)
```
├── app/                 # Next.js App Router pages & layouts
├── components/          # Reusable React components (ShadCN / ActernityUI)
├── lib/
│   ├── clients/
│   │   ├── google/
│   │   │   └── client.ts
│   │   └── openai/
│   │       └── client.ts
│   └── functions/
│       ├── generateUUID.ts
│       ├── getCurrentTimestamp.ts
│       └── routeToModel.ts
├── tests/               # Lightweight tsx scripts
│   └── *.ts
├── .env.example         # Sample env file (TODO)
└── README.md
```

---

## Contributing
Pull requests are welcome! Please follow these steps:
1. **Fork** the repo & create a feature branch: `git checkout -b feature/<name>`
2. **Commit** descriptive messages.
3. **Open a PR** against `main`.
4. Gio & Ada will review and merge.

---

## License
MIT © Gio 2025


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
