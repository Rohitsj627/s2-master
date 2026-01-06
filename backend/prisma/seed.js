const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Check if superadmin already exists
  const existingSuperAdmin = await prisma.user.findUnique({
    where: { email: 'superadmin@demo.com' }
  });

  if (!existingSuperAdmin) {
    // Hash default password
    const hashedPassword = await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10);

    // Create superadmin
    const superadmin = await prisma.user.create({
      data: {
        email: 'superadmin@demo.com',
        password: hashedPassword,
        firstName: 'Super',
        lastName: 'Admin',
        role: 'superadmin',
        status: 'active',
        isPasswordChanged: false
      }
    });

    console.log('✅ Superadmin created:', superadmin.email);
    console.log('🔑 Default password:', process.env.DEFAULT_PASSWORD);
    console.log('⚠️  Please change this password immediately!');
  } else {
    console.log('ℹ️  Superadmin already exists');
  }

  // Create a sample institution
  const existingInstitution = await prisma.institution.findFirst({
    where: { name: 'EduSmart Academy' }
  });

  if (!existingInstitution) {
    const institution = await prisma.institution.create({
      data: {
        name: 'EduSmart Academy',
        domain: 'edusmart.edu',
        address: '123 Education Street, Knowledge City',
        phone: '+1 234 567 8900',
        email: 'info@edusmart.edu',
        status: 'active'
      }
    });
    console.log('✅ Sample institution created:', institution.name);
  }

  console.log('✅ Seed completed successfully.');
}

main()
  .catch((error) => {
    console.error('❌ Seed error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });