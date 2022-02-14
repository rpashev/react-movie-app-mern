# Movie App 
A responsive single page application allowing registered users to search for movies in an external database and organize the movies in userlists.  
This app is built with the MERN stack - Mongo/Express/React/Node.  
Here you can find the [REST API](https://github.com/rpashev/rest-movie-apps) that I have created.  
The application uses [OMDB Api](https://www.omdbapi.com/) as a movie database.  
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
### Anonymous users are able to:
- view the homepage
- register
- login

### Authenticated users are able to:
- search for any movie/tv series by name from the "Database" page
- add movies to their "Watchlist" and "Watched" lists
- remove movies from their "Watchlist" and "Watched" lists
- view their "Watchlist" and "Watched" lists
- view a list of movies that other users have in their user lists from the "Explore" page
- view a "Details" page for each movie
- search movies by name in all lists
- view their "Profile Page" 
- upload an avatar
- logout


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
**To get a local copy up and running follow these simple steps:**

1. Make sure you have `node` and `npm` installed globally on your machine.  

3. Clone the repo  
`git clone https://github.com/rpashev/react-movie-app-mern.git`  

3. Install NPM packages  
  `npm install`    
  
4. Run the app in development mode with hot reloading  
`npm start`  

5. You can view the app on [http://localhost:3000](http://localhost:3000)  
 
7. To build for production run the following command  
`npm run build`


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
