const path = require("path");

module.exports = {
	webpack: {
		// plugins: {
		// 	remove: ["CssMinimizerPlugin"],
		// },
		alias: {
			"@": path.resolve("src"),
			types: path.resolve("types"),
		},
	},
};
