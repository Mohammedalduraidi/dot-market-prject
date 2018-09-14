// This function creates the session when the user is signed up or logged in and returns 201 status to
// the client as success session creation
exports.createSession = function (req, res, newUser) {
    req.session.regenerate(function () {
      req.session.user = newUser;
      res.sendStatus(201);
    });
  };