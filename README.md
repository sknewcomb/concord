This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# concord
Concord is my attempt to have a self-hosted and open source chat client similar to Discord.

<!-- Project: Concord (Open-Source, Self-Hosted) -->
<!-- Framework: Next.js (App Router) + shadcn/ui + Socket.IO + Docker -->

## ---------------------------
## 📦 Folder Structure (Monorepo Style)
## ---------------------------
/app           --> Next.js app (UI, pages, API routes)  
/lib           --> Shared code (auth, db, sockets, utils)  
/prisma        --> Prisma schema and migrations  
/docker        --> Dockerfile, docker-compose.yml, nginx.conf  

## ---------------------------
## 🗺️ Roadmap (MVP First)
## ---------------------------

/**
 * 🏁 Milestone 0: Project Bootstrap
 * - [X] Scaffold new Next.js app (App Router, Typescript, Tailwind)
 * - [X] Install shadcn/ui with TailwindCSS
 * - [X] Setup ESLint + Prettier + Husky (optional)
 * - [X] Dockerize app (basic Dockerfile + dev service)
 */

/**
 * 🔐 Milestone 1: Auth System
 * - [ ] Setup auth with Clerk
 * - [ ] User model in DB with Prisma
 * - [ ] JWT session storage
 */

/**
 * 💬 Milestone 2: Real-time Chat MVP
 * - [ ] Setup WebSocket server using Socket.IO in Next.js API route
 * - [ ] Connect client socket to backend
 * - [ ] Allow users to send/receive messages in a general channel
 */

/**
 * 🏠 Milestone 3: Server & Channel Logic
 * - [ ] DB schema for Server (aka Guild), Channels, Memberships
 * - [ ] Create/join servers, view channels
 * - [ ] Text chat per-channel
 */

/**
 * 👮 Milestone 4: Roles & Permissions
 * - [ ] Define roles (Owner, Admin, Member)
 * - [ ] Restrict chat send/delete by role
 * - [ ] Invite user to server by email/username
 */

/**
 * 🧪 Bonus Ideas (Post-MVP)
 * - [ ] Direct Messages (DMs)
 * - [ ] Message history search
 * - [ ] Media/file upload with storage (S3 or local)
 * - [ ] Presence indicators (online/offline)
 * - [ ] Emoji reactions
 */

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
