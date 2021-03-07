"use strict";

const t = require("tap");

module.exports = async () => {

	const { ESLint } = require("eslint");
	const linter = new ESLint({"ignore": false});
	const formatter = await linter.loadFormatter("json");

	t.test("Lint valid file", async t => {

		t.test("should return a report with zero linting errors", async t => {

			const results = JSON.parse(await formatter.format(await linter.lintFiles(["test/fixture/valid.js"])));
			
			t.equal(results[0].errorCount, 0, "reports no errors");
			t.equal(results[0].warningCount, 0, "reports no warnings");

			t.equal(results[0].messages.length, 0, "reports no messages");

			t.done();

		});

		t.done();

	});

	t.test("Lint file with bad code style", async () => {

		t.test("should return a list of linting errors", async t => {

			const results = JSON.parse(await formatter.format(await linter.lintFiles(["test/fixture/invalid.js"])));
			
			t.ok(results[0].errorCount > 0, "reports at least one error");

			for(const error of results[0].messages){
				t.notEqual(error.fatal, true, "error is not a fatal error (fatal = something else is wrong)");
			}

			t.done();

		});

		t.done();

	});

};

module.exports();
