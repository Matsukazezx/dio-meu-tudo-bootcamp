<div align="center">

  <img src="./.github/assets/blue-saiyan-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>NODE BOILERPLATE - BLUE EDITION (Fastify)</strong></h1>
  <p align="center">
	  Don't start a new Node project from zero!<br> Use this simple <b>Node.js</b> boilerplate with pre-configured <b>Typescript</b>, <b>Fastify</b> and modern DX.
  </p>

</div>

<br />

<!-- Badges -->

<div align="center">

[![TypeScript version][ts-badge]][typescript-5-4]
[![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

This boilerplate was developed with the following stack:

### 📦 Dependencies

* [typescript][typescript-npm] - Superset for application scale JavaScript development
* [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
* [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
* [@types/node][@types/node-npm] - type definitions for node
* [fastify][fastify-npm] - Fast and low overhead web framework for Node.js
* [@fastify/cors][fastify-cors-npm] - CORS plugin for Fastify

### 📄 Files

* `.gitignore` - Ignore folders like node\_modules
* `.env` - Environment variables
* `tsconfig.json` - TypeScript configure Options
* `src/data` - Centralized mock data (drivers & teams)
* `src/routes` - Organized route handlers
* `src/server.ts` - Fastify entrypoint

### ⚡ Scripts

* `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
* `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
* `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
* `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 👨‍💻 How To Use

click in **\[Use this template]** OR

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/felipeAguiarCode/node-blue-boilerplate

# Go into the repository
$ cd node-blue-boilerplate

# Install dependencies
$ npm install

# Run in dev mode
$ npm run start:dev
```

# 🌐 Available Routes

After starting the server (`npm run start:dev`), you can test:

* `GET /teams` → List all F1 teams
* `GET /drivers` → List all F1 drivers
* `GET /drivers/:id` → Get driver by ID

### 🧪 Examples

```bash
curl http://localhost:3333/teams
```

**Response**

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
    { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" }
  ]
}
```

```bash
curl http://localhost:3333/drivers/1
```

**Response**

```json
{
  "driver": { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" }
}
```

# 📂 Project Structure

```
src/
  data/
    teams.ts       # Mock data: teams
    drivers.ts     # Mock data: drivers
  routes/
    teams.ts       # Routes for /teams
    drivers.ts     # Routes for /drivers
  server.ts        # Fastify server entrypoint
```

## Author

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                             [Linkedin](www.linkedin.com/in/felipe-aguiar-exe/)                                            |

## Contributors & Improvements

This boilerplate was initially created by **Felipe Aguiar**, and later improved by **[Matsukazezx](https://github.com/Matsukazezx)**, adding:

- Fastify integration  
- Organized routes and mock data  
- Example requests/responses  
- Improved documentation

# Credits

icons by [Pino Lamanna][dribble-icon]

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
[fastify-npm]: https://www.npmjs.com/package/fastify
[fastify-cors-npm]: https://www.npmjs.com/package/@fastify/cors
