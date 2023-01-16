## 6.0.0
Includes breaking fixes for minor code style issues.

`breaking` Removed support for Node 14.

## 5.1.0
`added` Added a check for constant binary expressions.

## 5.0.0
`breaking` Removed support for Node 12.

`added` Added support for Node 18.

## 4.1.0
`added` Now automatigally activates parser support for the latest ECMAScript features.

## 4.0.0
`breaking` Updated to work with Eslint 8.

`removed` No longer lints code examples inside jsdoc comments, due to technical limitations.

## 3.3.0
`removed` No longer requires shallow jsdoc indentation, allowing for jsdoc comments on nested functions.

## 3.2.0
`removed` No longer checks for atomic updates because the check was too buggy.

## 3.1.0
`fixed` All JSDoc issues are now categorized as warnings, making it easier to distinguish between documentation and code issues.

`removed` JSDoc comments no longer disallow spacing between tags.

## 3.0.1
`fixed` Include updated changelog in released package.

## 3.0.0
Includes breaking fixes for minor code style issues, adds JSDoc documentation.

`breaking` Now requires JSDoc dodumentation for all files and functions.

`breaking` Now requires all switch cases to be indented.

`removed` No longer does a check for code complexity.

`removed` No longer checks indentation of property chains.

`fixed` Now allows empty lines at start of file.

`fixed` Loosened check for space before block to allow for blocks in switch cases.

## 2.1.1
`fixed` Updated badges in readme as part of test system refactor.

## 2.1.0
`fixed` No longer enforces Unix-style EOLs on Windows, instead expects Git to auto-convert them before pushing to the repo.

`fixed` Other minor improvements to cross-platform support.

`added` Now has explicit support for Linux/Ubuntu, MacOS & Windows.

`added` Now has explicit support for Node versions 12, 14 & 15.

## 2.0.0
`breaking` Now also lints dotfiles by default.

## 1.0.0
Initial release. Built from scratch for ESLint 7.
