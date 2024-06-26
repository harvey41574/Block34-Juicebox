function requireUser(req, res, next) {
  if(!req.user){
    res.status(401);
    next({
      name:"MissingUserName",
      message:"You must be logged in to use."
    });
  }
  next();
}

module.exports = {
  requireUser
}