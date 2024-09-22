const express = require('express');
const { getGitHubData } = require('../controllers/githubController');
const router = express.Router();

router.get('/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const data = await getGitHubData(username);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
