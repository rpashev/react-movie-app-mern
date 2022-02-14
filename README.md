# Movie App 
A single page application allowing registered users to search for movies in an external database and organize the movies in userlists.  
This app is built with the MERN stack - Mongo/Express/React/Node.  
Here you can find the [REST API](https://github.com/rpashev/rest-movie-apps) that I have created.  
The application also uses [OMDB Api](https://www.omdbapi.com/) as a movie database.  
> Live demo coming soon

## Table of Contents
* [General Info](#general-information)
* [Challenges](#challenges)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
This app is the second version of an app I made for the [software academy](https://softuni.bg/) I attended. As a person that often watches movies it was an easy choice for me to make such an application. My goal was to confirm and build upon my React skills while working on a topic that greatly interests me. Building a [REST API](https://github.com/rpashev/rest-movie-apps) was also something I strived to do as I want to be able to create full-stack applications.


## Challenges
- working with an external api such as [OMDB Api](https://www.omdbapi.com/) was challenging as the API had limitations which I had to consider
- the combination of front end + external api + my own api made it challenging to come up with a solution that optimizes the data flow of the app
- the first time I used SASS/SCSS was in this app so I had to get used to nesting - something that I now greatly appreciate 
- first time I dealt with file upload for the feature allowing users to upload images to Cloudinary
- error handling was challenging
- coming up with a design was a struggle and I am still not happy about the way the application looks


## Technologies Used  

### Front End
- React 17.0.2
- React Router 6.0.2
- Context API
- SASS/SCSS
- CSS/SCSS Modules
- Axios
- React Transition Group  
  
 ### Back End
 - Node
 - Express 
 - MongoDB
 - Mongo Atlas
 - Mongoose
 - JWT
 - Axios
 - Cloudinary
 - [OMDB Api](https://www.omdbapi.com/)


## Features
List the ready features here:
- Awesome feature 1
- Awesome feature 2
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Room for Improvement
- create and implement a more professional design, especially for the User Profile page
- implement an "Add Review" feature on the front end which already exists on the [backend](https://github.com/rpashev/rest-movie-apps)
- implement an "Auto Logout" functionality on JWT expiration
- improve user feedback when adding/removing movies from user lists from Details page
- spend more time on refactoring repetitive code
- break up some of the bigger components into smaller ones
- change webpack configuration so SCSS variables are auto imported in every SCSS file instead of manually importing it


## Contact
Created by me - feel free to contact me!









## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

