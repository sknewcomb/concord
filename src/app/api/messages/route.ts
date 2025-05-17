import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils';

// GET /api/messages?channelId=... - List messages for a channel
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!);
  const channelId = searchParams.get('channelId');
  if (!channelId) return NextResponse.json({ error: 'channelId required' }, { status: 400 });
  const messages = await prisma.message.findMany({
    where: { channelId },
    include: { user: true },
    orderBy: { createdAt: 'asc' },
  });
  return NextResponse.json(messages);
}

// POST /api/messages - Create a new message
export async function POST(req: Request) {
  const data = await req.json();
  const message = await prisma.message.create({
    data: {
      content: data.content,
      userId: data.userId,
      channelId: data.channelId,
    },
    include: { user: true },
  });
  return NextResponse.json(message);
}
