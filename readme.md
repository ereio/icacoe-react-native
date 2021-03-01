# icacoe

a tictactoe app created as an example (1 hour timebox)

## Overview

Much of my professional experience with React Native comes from development starting in 2017 and earlier versions of React.
I've used class based components, binding function scope in constructors, etc. for longer, but have used hooks now in my personal development.
Additionally, I've tried to implement what I know about sustainable, long term archtitecture, but also applied with hooks!

## Steps

0. create stubbed views based on estimated screens needed
0. added navigation library to navigate between screens
0. added style library to style navigation buttons and future components
0. routed navigation through stubbed routes
0. successfully navigated through app flow
0. added state management library (redux) for immutable state pattern (well known / documented pattern)
0. [flipper install in podfile causes issues in react native v0.63, macos only?](https://github.com/facebook/react-native/issues/30836) commented out flipper in podfile
0. create redux stores for a game and a board
0. create the board component and the nested components to create the rows and columns to tic-tac-toe
0. hook up the board to the redux store
0. create actions to handle in the incoming player moves (swapping users as we go)
0. edge case testing

## Improvements (with more time)

With additional time, I would have liked to add the following:

- Have examples of internal component state (useState)
  - convert the "board" store to local state
  - it's not really necessary to have the board in a global redux store, though it's here as an example
- Eslintrc.js with rules formatted to desired code styling (editor agnostic code styleguide)
  - airbnb's probably
- Pick which user goes first on home screen
- See how many times each player type has won (or tied) on score board
- Clean up some rough domain logic 
- Testing domain logic (within the redux store and actions)
- Extract react-navigation out to an isolated component alongside the view as index.js (similar to the store index.js)
- Setup dotenv for development or staging environment config (if remote apis or demo data was available)
- Add a nice icon
- Actual UI/UX stuff
