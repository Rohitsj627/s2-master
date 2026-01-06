const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { body } = require('express-validator');

// Login route
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
  body('role').isIn(['superadmin', 'admin', 'teacher', 'parent', 'student'])
], AuthController.login);

// Change password route (for first login)
router.post('/change-password', [
  authMiddleware.verifyToken,
  body('currentPassword').notEmpty(),
  body('newPassword').isLength({ min: 8 })
], AuthController.changePassword);

// Admin reset password
router.post('/admin/reset-password', [
  authMiddleware.verifyToken,
  body('userId').isInt(),
  body('newPassword').isLength({ min: 8 })
], AuthController.adminResetPassword);

// Get current user
router.get('/me', authMiddleware.verifyToken, AuthController.getCurrentUser);

// Logout
router.post('/logout', authMiddleware.verifyToken, AuthController.logout);

module.exports = router;