const flashConfig = (req, res, next) => { 
  res.locals.isAuthenticated = req.session.isLoggedIn 
  res.locals.errorMessage = req.flash('error');
  res.locals.successMessage = req.flash('success');
  next();
}

module.exports = flashConfig;
