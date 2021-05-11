"use strict";

const tap = require("tap");

module.exports = async () => {

	const { ESLint } = require("eslint");
	const linter = new ESLint({"ignore": false});
	const formatter = await linter.loadFormatter("json");

	tap.test("Lint valid file", async () => {

		tap.test("should return a report with zero linting errors", async () => {

			const results = JSON.parse(await formatter.format(await linter.lintFiles(["test/fixture/valid.js"])));
			
			tap.equal(results[0].errorCount, 0, "reports no errors");
			tap.equal(results[0].warningCount, 0, "reports no warnings");

			tap.equal(results[0].messages.length, 0, "reports no messages");

			tap.end();

		});

		tap.end();

	});

	tap.test("Lint file with bad code style", async () => {

		tap.test("should return a list of linting errors", async () => {

			const results = JSON.parse(await formatter.format(await linter.lintFiles(["test/fixture/invalid.js"])));
			
			tap.ok(results[0].errorCount > 0, "reports at least one error");

			for(const error of results[0].messages){
				tap.not(error.fatal, true, "error is not a fatal error (fatal = something else is wrong)");
			}

			tap.end();

		});

		tap.end();

	});

};

module.exports();
