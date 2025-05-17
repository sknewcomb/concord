import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils';

// GET /api/memberships?serverId=... - List memberships for a server
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!);
  const serverId = searchParams.get('serverId');
  if (!serverId) return NextResponse.json({ error: 'serverId required' }, { status: 400 });
  const memberships = await prisma.membership.findMany({
    where: { serverId },
    include: { user: true },
  });
  return NextResponse.json(memberships);
}

// POST /api/memberships - Add a user to a server
export async function POST(req: Request) {
  const data = await req.json();
  const membership = await prisma.membership.create({
    data: {
      userId: data.userId,
      serverId: data.serverId,
      role: data.role || 'MEMBER',
    },
    include: { user: true },
  });
  return NextResponse.json(membership);
}
