const User = require('./models/User');

const saveUsername = async (username) => {
  try {
    const user = new User({ username });
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Username already exists or an error occurred');
  }
};

module.exports = { saveUsername };
