import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils';

// GET /api/channels?serverId=... - List channels for a server
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!);
  const serverId = searchParams.get('serverId');
  if (!serverId) return NextResponse.json({ error: 'serverId required' }, { status: 400 });
  const channels = await prisma.channel.findMany({
    where: { serverId },
    include: { messages: true },
  });
  return NextResponse.json(channels);
}

// POST /api/channels - Create a new channel
export async function POST(req: Request) {
  const data = await req.json();
  const channel = await prisma.channel.create({
    data: {
      name: data.name,
      type: data.type || 'TEXT',
      serverId: data.serverId,
    },
  });
  return NextResponse.json(channel);
}
