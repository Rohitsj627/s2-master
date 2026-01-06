const prisma = require('../config/database').prisma;
const bcrypt = require('bcryptjs');
const TokenUtil = require('../utils/token.util');
const PasswordUtil = require('../utils/password.util');

class AuthController {
  // =========================
  // LOGIN
  // =========================
  static async login(req, res) {
    try {
      const { email, password, role } = req.body;

      const user = await prisma.user.findFirst({
        where: {
          email,
          role,
          status: 'active'
        }
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email, password, or role'
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email, password, or role'
        });
      }

      // Update last login
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() }
      });

      const token = TokenUtil.generateToken(user);

      const isDefaultPassword = await bcrypt.compare(
        process.env.DEFAULT_PASSWORD,
        user.password
      );

      return res.json({
        success: true,
        message: 'Login successful',
        data: {
          token,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            institutionId: user.institutionId,
            isPasswordChanged: user.isPasswordChanged
          },
          requiresPasswordChange: !user.isPasswordChanged || isDefaultPassword
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  // =========================
  // CHANGE PASSWORD (FIRST LOGIN)
  // =========================
  static async changePassword(req, res) {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = req.user.id;

      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      const isCurrentPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isCurrentPasswordValid) {
        return res.status(400).json({
          success: false,
          message: 'Current password is incorrect'
        });
      }

      const validation = PasswordUtil.validatePassword(newPassword);
      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          message: 'Password validation failed',
          errors: validation.errors
        });
      }

      if (PasswordUtil.isDefaultPassword(newPassword)) {
        return res.status(400).json({
          success: false,
          message: 'New password cannot be the default password'
        });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await prisma.user.update({
        where: { id: userId },
        data: {
          password: hashedPassword,
          isPasswordChanged: true
        }
      });

      const token = TokenUtil.generateToken(user);

      return res.json({
        success: true,
        message: 'Password changed successfully',
        data: {
          token,
          requiresPasswordChange: false
        }
      });
    } catch (error) {
      console.error('Change password error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  // =========================
  // ADMIN / SUPERADMIN RESET PASSWORD
  // =========================
  static async adminResetPassword(req, res) {
    try {
      const { userId, newPassword } = req.body;
      const currentUser = req.user;

      const targetUser = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!targetUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Admin can reset only same institution users
      if (
        currentUser.role === 'admin' &&
        targetUser.institutionId !== currentUser.institutionId
      ) {
        return res.status(403).json({
          success: false,
          message: 'You can only reset passwords for users in your institution'
        });
      }

      const validation = PasswordUtil.validatePassword(newPassword);
      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          message: 'Password validation failed',
          errors: validation.errors
        });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await prisma.user.update({
        where: { id: userId },
        data: {
          password: hashedPassword,
          isPasswordChanged: false
        }
      });

      return res.json({
        success: true,
        message:
          'Password reset successfully. User will need to change it on next login.'
      });
    } catch (error) {
      console.error('Admin reset password error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }

  // =========================
  // LOGOUT
  // =========================
  static async logout(req, res) {
    return res.json({
      success: true,
      message: 'Logout successful'
    });
  }

  // =========================
  // GET CURRENT USER
  // =========================
  static async getCurrentUser(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          institutionId: true,
          status: true,
          createdAt: true
        }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      return res.json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error('Get current user error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
}

module.exports = AuthController;
