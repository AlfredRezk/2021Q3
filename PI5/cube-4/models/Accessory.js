const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true, maxLength: 200 },
	imageUrl: { type: String, required: true },
	cubes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Cube",
		},
	],
});

// // Image Validation
// accessorySchema.path("imageUrl").validate(function () {
// 	let pattern = /^http(s)?\:\/\/.*/i;
// 	return pattern.test(this.imageUrl);
// }, "Must be a correct url");

module.exports = mongoose.model("Accessory", accessorySchema);
