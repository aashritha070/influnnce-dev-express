const jwt = require("jsonwebtoken")

const config = process.env;

const authenticator = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token)
    return res
      .status(403)
      .json({ message: "Unauthorised access" })

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    req.emailId = decoded.emailId;
    req.tags = decoded.tags
    req.firstName = decoded.firstName
    req.lastName = decoded.lastName
  }
  catch (err) {
    return res
      .status(401)
      .send("Unauthorised access");
  }
  return next();
};

module.exports = authenticator;