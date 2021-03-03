module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 2020,
	},
	globals: {
		localStorage: true,
		window: true,
		document: true,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "es5",
				bracketSpacing: true,
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prefer-rest-params": "off",
		"no-prototype-builtins": "off",
		"no-empty": "off",
		// quotes: ['error', 'single'],
	},
};
