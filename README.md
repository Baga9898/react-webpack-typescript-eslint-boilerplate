# React Webpack TypeScript ESLint Boilerplate

Webpack 5 ready template for React TypeScript.

## Installation
clone this repository and run the install script.

    npm i

## Scripts
### Development server
    npm start

You can find the development server at `localhost:3000`.

### Development build
    npm run dev

### Production build
    npm run build

### Linting
    npm run lint

When executing this script, ESLint checks all application files (except for exceptions) according to the rules described in `.eslintrc` and displays a report on non-compliance with the rules in the terminal.

### Linting fix
    npm run lint:fix

When executing this script, ESLint checks if it can fix the found rule inconsistencies in `.eslintrc` and fixes them. </br>
It does not fix everything, for example, the console.log will not be removed because ESLint does not know if you need it.