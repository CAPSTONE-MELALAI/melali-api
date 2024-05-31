const jwtUtils = require('../utils/jwtUtils.js');

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: 'Token tidak ada' });
  }

  try {
    const decoded = jwtUtils.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ msg: error.message });
  }
};

module.exports = verifyTokenMiddleware;
