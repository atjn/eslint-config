"use strict";

/**
 * @file
 * This is the main configuration file that defines all the rules eslint will use to validate code.
 */

const os = require("os");

module.exports = {

	plugins: [
		"jsdoc",
		"promise",
	],

	env: {
		"es2022":			true,
		"browser":			true,
		"worker":			true,
		"serviceworker":	true,
		"node":				true,
	},

	parserOptions: {
		ecmaVersion: "latest",
	},

	ignorePatterns: [

		//Dotfiles are ignored by default. This makes sure they are linted.
		"!**/.*.js",

		//Ignore any test fixture files. They might be intentionally bad.
		"test/fixture/**",

	],

	extends: [
		"eslint:recommended",
		"plugin:jsdoc/recommended",
		"plugin:promise/recommended",
	],

	//Rules are ordered according to their documentation: https://eslint.org/docs/rules/

	rules: {

		//Possible Errors
		"no-constant-binary-expression":	 "error",
		"no-new-native-nonconstructor":		 "error",
		"no-unreachable-loop":				 "error",
		"no-unsafe-optional-chaining":		["error", {"disallowArithmeticOperators": true}],
		"require-atomic-updates":			["error", {"allowProperties": true}],

		//Best Practices
		"curly":							["error", "multi-line"],
		"default-case-last":				 "error",
		"dot-location":						["error", "property"],
		"eqeqeq":							["error", "always"],
		"guard-for-in":						 "error",
		"no-empty-function":				 "error",
		"no-empty-static-block":			 "error",
		"no-eval":							 "error",
		"no-implicit-coercion":				 "error",
		"no-implicit-globals":				["error", {"lexicalBindings": false}],
		"no-implied-eval":					 "error",
		"no-script-url":					 "error",
		"no-throw-literal":					 "error",
		"no-unused-expressions":			 "error",
		"no-void":							 "error",
		"prefer-named-capture-group":		 "error",
		"require-unicode-regexp":			 "error",

		//Strict Mode
		"strict":							["error", "global"],

		//Variables
		"no-label-var":						 "error",
		"no-undef-init":					 "error",

		//Stylistic Issues
		"array-element-newline":			["error", "consistent"],
		"brace-style":						["error", "1tbs", {"allowSingleLine": true}],
		"comma-dangle":						["error", "always-multiline"],
		"comma-spacing":					["error", {"before": false, "after": true}],
		"comma-style":						["error", "last"],
		"eol-last":							["error", "always"],
		"func-call-spacing":				["error", "never"],
		"function-call-argument-newline":	["error", "consistent"],
		"function-paren-newline": 			["error", "consistent"],
		"implicit-arrow-linebreak":			["error", "beside"],
		"indent":							["error", "tab", {"MemberExpression": "off", "SwitchCase": 1}],
		"key-spacing":						["error", {"beforeColon": false, "afterColon": true, "mode": "minimum"}],

		//									If the operating system does not use Unix EOLs, Git should auto-convert between EOL types when pushing/pulling code.
		//									If Git is incorrectly configured, the wrong EOLs can end up in the codebase, but will be detected next time linting is run on an OS with Unix EOLs.
		//									This is mainly a problem on Windows and it's a mess.
		"linebreak-style":					[os.EOL === "\n" ? "error" : "off", "unix"],

		"max-depth":						["error", {"max": 10}],
		"max-nested-callbacks":				["error", {"max": 10}],
		"multiline-ternary":				["error", "always-multiline"],
		"new-cap":							["error", {"newIsCap": true, "capIsNew": true, "properties": true}],
		"no-array-constructor":				 "error",
		"no-bitwise":						 "error",
		"no-mixed-operators":				 "error",
		"no-multi-assign":					 "error",
		"no-multiple-empty-lines":			["error", {"max": 4, "maxEOF": 1, "maxBOF": 3}],
		"no-new-object":					 "error",
		"no-underscore-dangle":				 "error",
		"no-unneeded-ternary":				 "error",
		"object-curly-newline":				["error", {"consistent": true}],
		"prefer-exponentiation-operator":	 "error",
		"prefer-object-spread":				 "error",
		"quote-props":						["error", "consistent"],
		"quotes":							["error", "double", {"avoidEscape": true, "allowTemplateLiterals": true}],
		"semi":								["error", "always"],
		"semi-spacing":						["error", {"before": false, "after": true}],
		"semi-style":						["error", "last"],

		//									"keywords" has to be off to allow blocks in switch-statements, but this also means that things like if- and for-statements are not enforced :/
		"space-before-blocks":				["error", {"functions": "never", "keywords": "off", "classes": "never"}],

		"space-before-function-paren":		["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
		"space-infix-ops":					 "error",
		"space-unary-ops":					["error", {"words": true, "nonwords": false}],
		"switch-colon-spacing":				["error", {"after": true, "before": false}],
		"unicode-bom":						["error", "never"],
		"wrap-regex":						 "error",

		//ECMAScript 6
		"arrow-spacing":					["error", {"before": true, "after": true}],
		"no-inner-declarations":			 "off", // This was good practice before ES6, but can be ignored now.
		"no-var":							 "error",
		"prefer-arrow-callback":			 "error",
		"prefer-const":						 "error",
		"prefer-rest-params":				 "error",
		"prefer-template":					 "error",
		"rest-spread-spacing":				["error", "never"],

		//JSDOC rules: https://github.com/gajus/eslint-plugin-jsdoc
		"jsdoc/check-access":								"warn",
		"jsdoc/check-syntax":								"warn",
		"jsdoc/require-description":						"warn",
		"jsdoc/require-description-complete-sentence":		"warn",
		"jsdoc/require-file-overview":						"warn",
		"jsdoc/require-hyphen-before-param-description":	"warn",
		"jsdoc/tag-lines":									"off",

	},

};
