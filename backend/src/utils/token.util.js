const jwt = require('jsonwebtoken');
require('dotenv').config();

class TokenUtil {
  // Generate JWT token
  static generateToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      institutionId: user.institutionId,
      isPasswordChanged: user.isPasswordChanged
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  }

  // Verify JWT token
  static verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  // Generate reset token
  static generateResetToken(userId) {
    return jwt.sign(
      { userId, type: 'reset' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  }
}

module.exports = TokenUtil;