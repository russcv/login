const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Register endpoint hit!' });
});

module.exports = router;
