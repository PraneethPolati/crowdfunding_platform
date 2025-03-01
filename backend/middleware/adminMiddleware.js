const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === "admin") { // Use role instead of isAdmin
    next(); // Proceed if user is admin
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};

module.exports = adminMiddleware;