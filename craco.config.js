const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve("src"),
			types: path.resolve("types"),
		},
	},
	style: {
		postcss: {
			plugins: (plugins) => [require("postcss-nesting")].concat(plugins),
		},
	},
};
