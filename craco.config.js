const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve("src"),
			types: path.resolve("types"),
		},
	},
};
