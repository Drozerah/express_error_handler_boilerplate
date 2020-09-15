# Setting up Express with Error handler boilerplate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

> Express Web Application Boilerplate with Error handler

Table of Contents
-----------------

- [Getting Started](#getting-started)
- [List of Packages](#list-of-packages)
- [Utilities](#Utilities)

Getting Started
---------------

```bash
# GET the latest version
λ git clone https://github.com/Drozerah/express_error_handler_boilerplate.git

# Change diretory
λ cd myproject

# Install NPM dependencies
λ npm install

# Start for development
λ npm run start:dev

# Start for production
λ npm start

# Rapid install
λ git clone https://github.com/Drozerah/express_error_handler_boilerplate.git my-project-name && cd my-project-name && npm install && code . && exit
```
List of Packages
----------------

| Package                                                                            | Description                                                              |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [cross-env](https://www.npmjs.com/package/cross-env)                               | Run scripts that set and use environment variables across platforms      |
| [dotenv](https://www.npmjs.com/package/dotenv)                                     | Load environment variables from a `.env` file into process.env.          |
| [ejs-lint](https://www.npmjs.com/package/ejs-lint)                                 | EJS linter                                                               |
| [eslint](https://eslint.org/)                                                      | Linter JavaScript.                                                       |
| [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)     | An ESLint Shareable Config for JavaScript Standard Style.                |
| [eslint-plugin-import](https://eslint.org/)                                        | Support linting of ES2015+ (ES6+) import/export syntax.                  |
| [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)             | Additional ESLint's rules for Node.js                                    |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)       | Enforce best practices for JavaScript promises.                          |
| [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)     | ESlint Rules for the Standard Linter.                                    |
| [express](https://expressjs.com/)                                                  | Node.js web framework.                                                   |
| [http-errors](https://www.npmjs.com/package/http-errors)                           | Create HTTP errors for Express                                           |
| [morgan](https://www.npmjs.com/package/morgan)                                     | HTTP request logger middleware for node.js                               |
| [nodemon](https://www.npmjs.com/package/nodemon)                                   | Auto restarting the application when file changes.                       |

Utilities
---------

- This code base comes with a `.env_example` file. Just rename it to `.env`, then you are ready to use environment variables separated from your code. Also, the `.gitignore` file prevent you to commit your `.env` file...
- The boilerplate comes with a `rest.http` file. You can use it as an alternative to [Postman](https://www.postman.com/) to make requests with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VSCode extension.
- __Happy coding !__

__Author:__

- **Thomas G. aka Drozerah** [Github](https://github.com/Drozerah)

__License:__

- [ISC](licence)