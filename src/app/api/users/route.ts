import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'

// GET /api/users - List all users
export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      ownedServers: true,
      memberships: true,
      messages: true,
    },
  });
  return NextResponse.json(users);
}

// POST /api/users - Create a new user
export async function POST(req: Request) {
  const data = await req.json();
  const user = await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      image: data.image,
    },
  });
  return NextResponse.json(user);
}
