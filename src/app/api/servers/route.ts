import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils';

// GET /api/servers - List all servers
export async function GET() {
  const servers = await prisma.server.findMany({
    include: { owner: true, memberships: true, channels: true },
  });
  return NextResponse.json(servers);
}

// POST /api/servers - Create a new server
export async function POST(req: Request) {
  const data = await req.json();
  const server = await prisma.server.create({
    data: {
      name: data.name,
      icon: data.icon,
      ownerId: data.ownerId,
    },
  });
  return NextResponse.json(server);
}
