const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please add a username"],
		unique: true,
		minLength: [3, "Username should be more than 3 characters"],
		maxLength: [15, "Username should less than 15 characters"],
		match: [/.*/, "Should follow the pattern"],
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function () {
				let pattern =
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return pattern.test(this.email);
			},
			message: (props) => `${props.value} is not a valid email!`,
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},

	// gender: {
	//   type: String,
	//   enum: ['male', 'female', 'other', 'not to say'],
	//   default: 'not to say'
	// }
});

// Custom validation

// userSchema.path('email').validate(function () { 
// let pattern =
// 	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// return pattern.test(this.email);
// })
  

module.exports = mongoose.model('user', userSchema)