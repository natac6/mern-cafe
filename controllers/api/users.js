const User = require("../../models/User");
const jwt = require('jsonwebtoken')

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body)
    // token will be a string
    const token = createJWT(user)

    // Send token back to client
    res.json(token)

  } catch (e) {
    res.status(400).json(e);
  }
}

// Helper Function
function createJWT(user) {
    return jwt.sign(
        // user is the data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

module.exports = {
  create,
};
