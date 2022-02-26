const env = process.env.NODE_ENV || 'development';

const config = {
	development: {
		port: process.env.PORT || 8080,
		dbURL:
			"mongodb+srv://alfred:alfred00@cluster0.bmyec.mongodb.net/orgami",
		authCookieName: "x-auth-token",
	},
	production: {},
};

module.exports = config[env];