# GitHub Search Tool #

#### A JavaScript application using the GitHub API, October 14th, 2016

#### By Mark Lawson

## Description ##

This application is an exercise in modern JavaScript using Node.js and Gulp. Node.js is used to create a local development server, while Gulp manages the project's assets. The app serves as a tool for users to search for GitHub users and view their repositories. By entering a GitHub username, the matching user's information is displayed on the page. In addition, the application is styled with Bootstrap and Sass.

## Setup/Installation Instructions ##

* Clone the repository
* Using the command line, navigate to the project's root directory
* Install dependencies by running $ npm install and $ bower install
* Add a GitHub API key:
  * Obtain a key from GitHub
  * Create a .env file in the root directory of the project and fill with: exports.apiKey = "[YOUR KEY HERE]";
* Launch the local development server by running $ gulp serve

## Specifications

* The program will return a GitHub user
    * Example input: username
    * Example output: user

* The program will return a user's repositories
    * Example input: username
    * Example output: repo1, repo2

* The program will clear previous results and display new search results
    * Example input: username2
    * Example output: user 2

## Known Bugs ##

There are no known bugs at this time.

## Support and Contact Details ##

Please report any bugs or issues to mlawson3691@gmail.com.

## Languages/Technologies Used ##

* JavaScript
* jQuery
* Node
* Bower
* NPM
* Gulp
* Sass
* JSHint
* GitHub API
* Bootstrap

### License ###

*This application is licensed under the MIT license.*

Copyright (c) 2016 Mark Lawson
