# Basic React Starter

A simple starter to be productive as fast as possible

## Features

A ReactJS App with

- **Style:** Nice way to apply style to Component with `Styled-Component`
- **State Management:** with `rematch` redux based solution without the verobosity
- **Testing:** With `Jest`, can test components, functions and store
- **Typescript:** To have more robust code
- **A nice dev env:** With hot reloading & TS compilation
- **Routing:** To handle routing if needed
- **Data fetching:** with `axios` should be replaced by `react-query` soon

## Main purpose of the project

It's not supposed to have great and beautiful components and 100% code coverage.

Only a personnal starter to have a good environment to start coding

## Prerequisites

Make sure you have installed Node.JS on your local machine

- Node.js `>= 12` - [Download & Install Node.js](https://nodejs.org)

## Installation

1. Install dependencies with `yarn`
   - run `$ yarn`
2. **That's it** you can code now

## Usage

### Development

1. run `$ yarn start` in your shell

- To compile with hot reloading all files `.ts` & `.js` and serve them

2. Open [http://localhost:3000](http://localhost:3000) to view the App

### Production

1. run `$ yarn build` in your shell

- the `build` folder will contains the app prod ready

2. run `$ serve -s build` to serve the builded app

### Test

3. run `$ yarn test` to run the tests

## Folder structure

### Main file

##### Entry point : `index.tsx`

##### Main routing & config : `App.tsx`

- Routing and App configuration

##### All screens : `screen` Folder

### Components

In `component` folder organized by module

All the components and containers of the App

### Store

In `store` folder organized by module

Deals with all state management

## Todo

- [ ] Add react-query
- [ ] Add script to add new module or new screen automatically
- [ ] Add e2e tests with `cypress`

## Inspiration and resources

[Guidelines for React App](https://alexkondov.com/tao-of-react/)

[Dan Abramov Guidelines](https://overreacted.io/writing-resilient-components)
