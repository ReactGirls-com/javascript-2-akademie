module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2022: true,
		node: true,
	},
	extends: "eslint:recommended",
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
