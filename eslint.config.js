export default [
	{
		ignores: ["node_modules/**"],
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
		},
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "default-case": "warn",
      "prettier/prettier": "error",
      "no-undef": "error",
      "no-redeclare": "error",
    },
	},
];
