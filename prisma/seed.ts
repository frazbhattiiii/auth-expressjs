import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  // 3. Seed admin user with hashed password
  // We can build a super admin role as well which  can create further admins, but not doing that for now!
  const hashedPassword = await bcrypt.hash('admin@123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {}, // If we find a user with that email, do nothing
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: Role.ADMIN, 
    },
  });

  console.log('Seeding finished!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
