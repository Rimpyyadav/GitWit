const express = require('express');
const { saveUsername } = require('../controllers/userController');
const router = express.Router();

router.post('/save', async (req, res) => {
  const { username } = req.body;
  try {
    const user = await saveUsername(username);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
