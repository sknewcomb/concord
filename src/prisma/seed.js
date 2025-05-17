// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (order matters due to FKs)
  await prisma.message.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.channel.deleteMany();
  await prisma.server.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const alice = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      username: 'Alice',
      image: null,
    },
  });
  const bob = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      username: 'Bob',
      image: null,
    },
  });
  const charlie = await prisma.user.create({
    data: {
      email: 'charlie@example.com',
      username: 'Charlie',
      image: null,
    },
  });

  // Create a server
  const server = await prisma.server.create({
    data: {
      name: 'Demo Server',
      icon: null,
      ownerId: alice.id,
      memberships: {
        create: [
          { userId: alice.id, role: 'OWNER' },
          { userId: bob.id, role: 'MEMBER' },
          { userId: charlie.id, role: 'MEMBER' },
        ],
      },
      channels: {
        create: [
          { name: 'general', type: 'TEXT' },
          { name: 'random', type: 'TEXT' },
        ],
      },
    },
    include: { channels: true },
  });

  // Create messages in #general
  const generalChannel = server.channels.find((c) => c.name === 'general');
  if (generalChannel) {
    await prisma.message.createMany({
      data: [
        { content: 'Hey everyone! 👋', userId: alice.id, channelId: generalChannel.id },
        { content: "Hi Alice! How's it going?", userId: bob.id, channelId: generalChannel.id },
        { content: 'Welcome to the Discord UI clone.', userId: charlie.id, channelId: generalChannel.id },
      ],
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
