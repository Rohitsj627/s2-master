const { sequelize } = require('./database');
require('dotenv').config();

const createTables = async () => {
  try {
    // Drop existing tables in development
    if (process.env.NODE_ENV === 'development') {
      await sequelize.query(`
        DROP TABLE IF EXISTS users CASCADE;
      `);
    }

    // Create users table
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        role VARCHAR(50) NOT NULL CHECK (role IN ('superadmin', 'admin', 'teacher', 'parent', 'student')),
        institution_id INTEGER,
        status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
        is_password_changed BOOLEAN DEFAULT FALSE,
        last_login TIMESTAMP,
        created_by INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        reset_token VARCHAR(255),
        reset_token_expiry TIMESTAMP
      );

      -- Create indexes
      CREATE INDEX idx_users_email ON users(email);
      CREATE INDEX idx_users_role ON users(role);
      CREATE INDEX idx_users_status ON users(status);
      CREATE INDEX idx_users_created_by ON users(created_by);
    `);

    console.log('✅ Database tables created successfully.');

    // Create initial superadmin if doesn't exist
    const bcrypt = require('bcryptjs');
    const { QueryTypes } = require('sequelize');
    
    const existingSuperAdmin = await sequelize.query(
      'SELECT * FROM users WHERE email = :email',
      {
        replacements: { email: 'superadmin@demo.com' },
        type: QueryTypes.SELECT
      }
    );

    if (existingSuperAdmin.length === 0) {
      const hashedPassword = await bcrypt.hash(process.env.DEFAULT_PASSWORD, 10);
      
      await sequelize.query(
        `INSERT INTO users (email, password, first_name, last_name, role, status, is_password_changed, created_at, updated_at) 
         VALUES (:email, :password, :firstName, :lastName, :role, :status, :isPasswordChanged, NOW(), NOW())`,
        {
          replacements: {
            email: 'superadmin@demo.com',
            password: hashedPassword,
            firstName: 'Super',
            lastName: 'Admin',
            role: 'superadmin',
            status: 'active',
            isPasswordChanged: false
          },
          type: QueryTypes.INSERT
        }
      );
      
      console.log('✅ Initial superadmin account created.');
      console.log('📧 Email: superadmin@demo.com');
      console.log('🔑 Password: Default@123');
      console.log('⚠️  Please change this password immediately!');
    }

  } catch (error) {
    console.error('❌ Error creating tables:', error);
    process.exit(1);
  }
};

// Run migrations
if (require.main === module) {
  createTables().then(() => {
    console.log('✅ Migration completed.');
    process.exit(0);
  });
}

module.exports = { createTables };