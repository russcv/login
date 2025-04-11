const express = require('express');
const router = express.Router();

// Placeholder login handler
router.post('/login', (req, res) => {
  console.log(req.body); // just to verify the input
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // You can add actual login logic here later
  res.json({ message: 'Login endpoint hit!' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint hit!' });
});

// Sample protected route
router.get('/profile', (req, res) => {
  // Later, you'd verify the user's JWT here
  res.json({ message: 'Profile endpoint hit!', user: { name: 'John Doe', email: 'john@example.com' } });
});

module.exports = router;
