const TokenUtil = require('../utils/token.util');
const { prisma } = require('../config/database');

const authMiddleware = {
  // Verify token and attach user to request
  verifyToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({
          success: false,
          message: 'Access denied. No token provided.'
        });
      }

      const decoded = TokenUtil.verifyToken(token);
      
      // Find user
      const user = await prisma.user.findUnique({
        where: { id: decoded.id }
      });
      
      if (!user || user.status !== 'active') {
        return res.status(401).json({
          success: false,
          message: 'User not found or account is inactive.'
        });
      }

      // Attach user to request
      req.user = {
        id: user.id,
        email: user.email,
        role: user.role,
        institutionId: user.institutionId,
        isPasswordChanged: user.isPasswordChanged
      };

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token.'
      });
    }
  },

  // Check if password has been changed (for first login)
  requirePasswordChange: (req, res, next) => {
    if (!req.user.isPasswordChanged) {
      return res.status(403).json({
        success: false,
        message: 'Please change your password before accessing this resource.',
        requiresPasswordChange: true
      });
    }
    next();
  },

  // Block access if using default password
  blockDefaultPassword: async (req, res, next) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id }
      });
      
      if (!user.isPasswordChanged) {
        return res.status(403).json({
          success: false,
          message: 'You must change your default password to continue.',
          requiresPasswordChange: true
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authMiddleware;