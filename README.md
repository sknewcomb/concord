# concord
Concord is my attempt to have a self-hosted and open source chat client similar to Discord.

// Project: Concord (Open-Source, Self-Hosted)
// Framework: Next.js (App Router) + shadcn/ui + Socket.IO + Docker

// ---------------------------
// 📦 Folder Structure (Monorepo Style)
// ---------------------------
// /app           --> Next.js app (UI, pages, API routes)
// /lib           --> Shared code (auth, db, sockets, utils)
// /prisma        --> Prisma schema and migrations
// /docker        --> Dockerfile, docker-compose.yml, nginx.conf

// ---------------------------
// 🗺️ Roadmap (MVP First)
// ---------------------------

/**
 * 🏁 Milestone 0: Project Bootstrap
 * - [ ] Scaffold new Next.js app (App Router, Typescript, Tailwind)
 * - [ ] Install shadcn/ui with TailwindCSS
 * - [ ] Setup ESLint + Prettier + Husky (optional)
 * - [ ] Dockerize app (basic Dockerfile + dev service)
 */

/**
 * 🔐 Milestone 1: Auth System
 * - [ ] Setup auth with NextAuth (email/password)
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
