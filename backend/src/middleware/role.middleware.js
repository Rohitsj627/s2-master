const { prisma } = require('../config/database');

const roleMiddleware = {
  // Check if user has one of the required roles
  requireRoles: (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required'
        });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient permissions to access this resource'
        });
      }

      next();
    };
  },

  // Check creation permissions based on hierarchy
  canCreateRole: (req, res, next) => {
    const { role: targetRole } = req.body;
    const userRole = req.user.role;

    const roleHierarchy = {
      superadmin: ['admin', 'teacher', 'parent', 'student'],
      admin: ['teacher', 'parent', 'student']
    };

    if (!roleHierarchy[userRole]) {
      return res.status(403).json({
        success: false,
        message: 'You cannot create users'
      });
    }

    if (!roleHierarchy[userRole].includes(targetRole)) {
      return res.status(403).json({
        success: false,
        message: `You cannot create users with role: ${targetRole}`
      });
    }

    next();
  },

  // Check if user can update/manage target user
  canManageUser: async (req, res, next) => {
    const targetUserId = req.params.id || req.body.userId;
    const currentUser = req.user;

    try {
      const targetUser = await prisma.user.findUnique({
        where: { id: parseInt(targetUserId) }
      });

      if (!targetUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Superadmin can manage anyone
      if (currentUser.role === 'superadmin') {
        return next();
      }

      // Admin can only manage users in their institution
      if (currentUser.role === 'admin') {
        if (targetUser.institutionId !== currentUser.institutionId) {
          return res.status(403).json({
            success: false,
            message: 'You can only manage users in your institution'
          });
        }
        return next();
      }

      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions to manage this user'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = roleMiddleware;