# React Webpack TypeScript ESLint Boilerplate
[![](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)
[![](https://img.shields.io/badge/webpack-5.75.0-blue)](https://webpack.js.org/)
[![](https://img.shields.io/badge/typescript-4.9.3-blue)](https://www.typescriptlang.org/)
[![](https://img.shields.io/badge/eslint-4.9.3-blue)](https://eslint.org/)
[![](https://img.shields.io/badge/babel-7.20.2-blue)](https://babeljs.io/)

Webpack 5 ready template for React, TypeScript & ESLint.

## Features

- Using React right away
- Project linting according to the given rules
- Hot reload during development
- Strong typing
- SASS/SCSS support out of the box
- File minification
- XML CSV support

## Installation
Clone this repository and run the install script.

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

When executing this script, ESLint checks all application files (except for exceptions) according to the rules described in `.eslintrc` and displays a report on non-compliance with the rules in the terminal.</br>
</br>
If you don't need any rules - just delete them or if something is missing - add them.</br>
=)=)

### Linting fix
    npm run lint:fix

When executing this script, ESLint checks if it can fix the found rule inconsistencies in `.eslintrc` and fixes them.</br>
</br>
It does not fix everything, for example, the console.log will not be removed because ESLint does not know if you need it.

</br>
Do good.</br>
=)=)