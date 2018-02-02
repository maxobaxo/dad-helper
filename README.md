# BetterDad

#### Capstone Project for Epicodus - Take 2, 02.01.18

_**By Max Scher**_

## Description

This web application is designed to help new (aka clueless) dads find meaningful ways to engage with their child based on age and current developmental phase. The app currently utilizes a local run server to call the [Dad Helper API](https://github.com/maxobaxo/dad-helper-api-graphql), which hosts a database at mLab.com and was built in conjunction with this app.

## User Stories

* User can submit the age-range of their baby to receive a list of skills the baby may currently demonstrate.
* User can select one or more of the returned skills and click 'submit' to receive a list of games that they can play with their baby to enhance and utilize the aforementioned skills.

<!-- ## Screenshot(s)

![Screenshot](/screenshots/screenshot.png "Main App Screenshot") -->

## Setup/Installation

In Terminal...
`git clone https://github.com/maxobaxo/dad-helper`  
`cd dad-helper`  
`npm install`  
`npm run dev`

`cd ..`  
`git clone https://github.com/maxobaxo/dad-helper-api`  
`cd dad-helper-api`  
`npm install`  
`npm run start`

In your browser, visit `https://localhost:3000`, and begin telling BetterDad about your child.

## Technical Specifications

* It can render a list of skills based on the user's age range selection.
  <!-- * It can hide the age form upon submission. -->
* It can allow user to select and submit multiple skills from the returned list.
* It can render a list of games based on the user's selection of skills.

## Wishlist

* Expand the database at mLab.com to include a much larger set of data to work with.
* Add user authentication via Auth0 to create personalized user accounts information.
  * Create functionality for users save returned games that they like to their profile.
  * Add ability to save data for multiple children.
* Add user ability to contribute games to the database, crowdsourcing it!
* Currently the [Dad Helper API](https://github.com/maxobaxo/dad-helper-api-graphql) utilizes hard-coded data in a server.js file; future plans to connect the server to a legitimate database.

## Technologies Used

[React JS](https://reactjs.org/) | [Redux](http://redux.js.org/) | [React-Bootstrap](https://react-bootstrap.github.io/) | [JavaScript](https://www.javascript.com/) |
[Webpack](https://webpack.github.io/) |
[Babel](https://babeljs.io/) | [Jest](https://facebook.github.io/jest/) | [Isomorphic Fetch](https://github.github.io/fetch/)

## Known Bugs

* 404 Error for favicon.
* `selected` attribute for `<select>` tag in AgeForm.jsx is deprecated, and there is no protection against submitting form with invalid value of 'Select an Age Range'

## License Information

This web application is free to use under the MIT License &copy; Max Scher
