const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

// Helper Function
function createJWT(user) {
  return jwt.sign(
    // user is the data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);

    // Send token back to client
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function logIn(req, res) {
  try {
    // Find the email the user typed in the frontend in our database
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

module.exports = {
  create,
  logIn,
};
