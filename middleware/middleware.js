const sessionMiddle = (req, res, next) => {
  res.locals.username = req.session?.name; 
  next();
};

const adminSession = (req, res, next) => {
  res.locals.login = req.session?.name; 
  next();
};

const checkSession = (req, res, next) => {
  if(res.locals.username = req.session?.name) {
    next();
  } else {
    res.redirect('/auth/signup')
  } 
};


module.exports = { sessionMiddle, checkSession, adminSession };
