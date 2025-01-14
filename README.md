# Node.js express  API

This is an API for an educational project built with Node.js, Express, TypeScript, and Prisma. The project demonstrates user authentication, validation, and CRUD operations with a SQLite database.

## Features

- User registration and login
- JWT-based authentication
- Middleware for request validation and authorization
- Prisma ORM for database interactions
- Unit and end-to-end testing with Jest
- Logging with tslog
- Environment configuration with dotenv

## Dependencies

- `@prisma/client`: Prisma Client for database access
- `bcryptjs`: Library for hashing passwords
- `body-parser`: Middleware for parsing request bodies
- `class-transformer`: Library for transforming plain objects to class instances
- `class-validator`: Library for validating class properties
- `dotenv`: Library for loading environment variables from a `.env` file
- `express`: Web framework for Node.js
- `inversify`: Dependency injection library for TypeScript and JavaScript
- `jsonwebtoken`: Library for generating and verifying JSON Web Tokens
- `reflect-metadata`: Library for adding metadata to JavaScript classes
- `tslog`: Logger for TypeScript

## Dev Dependencies

- `@types/bcryptjs`: Type definitions for bcryptjs
- `@types/express`: Type definitions for Express
- `@types/jest`: Type definitions for Jest
- `@types/jsonwebtoken`: Type definitions for jsonwebtoken
- `@types/supertest`: Type definitions for supertest
- `@typescript-eslint/eslint-plugin`: ESLint plugin for TypeScript
- `@typescript-eslint/parser`: TypeScript parser for ESLint
- `eslint`: Linter for JavaScript and TypeScript
- `eslint-config-prettier`: ESLint configuration for Prettier
- `eslint-plugin-prettier`: ESLint plugin for Prettier
- `jest`: JavaScript testing framework
- `nodemon`: Tool for automatically restarting the node application when file changes are detected
- `prettier`: Code formatter
- `prisma`: Prisma CLI
- `supertest`: Library for testing HTTP servers
- `ts-jest`: Jest transformer for TypeScript
- `ts-node`: TypeScript execution environment for Node.js
- `typescript`: TypeScript language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/node-express-api.git
    cd node-express-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the database:
    ```sh
    npx prisma migrate dev --name init
    ```

4. Generate Prisma Client:
    ```sh
    npx prisma generate
    ```

5. Create a `.env` file and add the following environment variables:
    ```env
    SALT=10
    SECRET='MYAPP'
    ```

### Running the Application

To start the application in development mode:
```sh
npm run dev
```

To build the application:
```sh
npm run build
```

To start the application in production mode:
```sh
npm start
```

### Running Tests

To run unit tests:
```sh
npm test
```

To run end-to-end tests:
```sh
npm run test:e2e
```