# icacoe

a tictactoe app created as an example

## Overview

This is actually my first time ever using hooks. Much of what I know about React Native comes from development starting in 2017 and earlier version of React. I'm far more
familar with using original class components, binding function scope in constructors, etc. I tried to extend what I know about sustainable archtitecture, but applied with hooks.
Because it's my first time, I may have accidentally used some bad practices or undesirable patterns. Please let me know if so, as I'd like for this aims to be learning experience! :)

With additional time, I would have added the following:
- eslintrc.js with rules formatted to desired code styling (editor agnostic code styleguide)
  - airbnb's probably
- extract react-navigation out to an isolated component alongside the view as index.js (similar to the store index.js)
- setup dotenv for development or staging environment config (if remote apis or demo data was available)
- add a nice icon

## Steps
0. create stubbed views based on estimated screens needed
0. added navigation library to navigate between screens
0. added style library to style navigation buttons and future components
0. routed navigation through stubbed routes
0. successfully navigated through app flow
0. added state management library (redux) for immutable state pattern (well known / documented pattern)
0. flipper install in podfile causes issues in react native v0.63, macos only? commented out flipper in podfile
  - https://github.com/facebook/react-native/issues/30836
0. 