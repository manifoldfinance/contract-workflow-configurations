// SPDX-License-Identifier: MIT
// Manifold Finance
"use strict";

module.exports = {
	extends: "solhint:recommended",
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"code-complexity": ["error", 7],
		// @param {compiler-version} - nothing below 0.5.0
		"compiler-version": ["error", "^0.5.0"],
		"const-name-snakecase": "off",
		"func-name-mixedcase": "off",
		"constructor-syntax": "error",
		"func-visibility": [
			"error",
			{
				ignoreConstructors: true,
			},
		],
		"not-rely-on-time": "off",
		"reason-string": [
			"warn",
			{
				maxLength: 88,
			},
		],
	},
};
