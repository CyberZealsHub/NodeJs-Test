# NodeJs-Test

A minimal Node.js project and GitHub Actions CI example. The repository demonstrates
installing dependencies, checking JavaScript syntax, and running tests across
multiple supported Node.js versions.

## Project contents

- `src/index.js` exports a `greet` function that returns a greeting.
- `test/index.test.js` verifies the default and custom-name behavior.
- `.github/workflows/node.js.yml` runs CI on pushes and pull requests to `main`,
  and can also be started manually. Its Node.js version matrix currently covers
  Node.js 18, 20, and 22.

## Run locally

Requires Node.js 18 or later and npm.

```sh
npm ci
npm run build
npm test
```

The build script checks the source file's syntax. The tests use Node.js's built-in
test runner and assertion library, so the project has no third-party dependencies.

## Example

```js
const { greet } = require("./src");

console.log(greet()); // Hello, world!
console.log(greet("Node.js")); // Hello, Node.js!
```

## CI outcome

GitHub Actions runs the install, build, and test steps for each Node.js version in
the workflow matrix. A successful run confirms that the project passes those
checks on all configured versions; it is a starter CI example, not a deployed
application.
