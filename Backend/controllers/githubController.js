const axios = require('axios');

const getGitHubData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('GitHub user not found');
  }
};

module.exports = { getGitHubData };
