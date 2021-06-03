## Unreleased
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
