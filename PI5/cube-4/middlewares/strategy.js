const User = require('../models/User')
const strategy = async (req, res, next) => {
	if (!req.session.user) {
		return next();
	}
	// search my db for that user
	const user = await User.findById(req.session.user._id);
	req.user = user;
	next();
};

module.exports = strategy