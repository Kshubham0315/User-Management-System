const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (token === 'mysecrettoken') {
    next(); // Authorized
  } else {
    res.status(401).send('Unauthorized access!');
  }
};

module.exports = authMiddleware;
