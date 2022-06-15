const jwt = require("jsonwebtoken");

const authUser = function(req, res, next){
  let token = req.headers["x-Auth-token"];
  if (!token) {
    token = req.headers["x-auth-token"];
  }

  if (!token) {
    return res.send({ status: false, msg: "Token must be present" });
  }

  let verifyUser = jwt.verify(token, "functionup-radon");

  if (!verifyUser){
    return res.send({ status: false, msg: "Token is incorrect" });
  }
  next();
}
const authmid = function (req, res, next) {

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-uranium");
  console.log(decodedToken);
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  // @ts-ignore
  let decoded = decodedToken.userId;
  if (userId != decoded) {
    return res.status(403).send("user is not authorize to change");
  }

  next();
};

module.exports.authUser = authUser;
