const jwt = require('jsonwebtoken');

const secret = 'talkinginyoursleep';
const expiration = '2h';

module.exports = {
    //Middleware here
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.username = data.username;
      req.id = data._id;
    } catch {
      console.error('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
 