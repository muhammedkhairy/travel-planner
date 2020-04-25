# Travel Planner

## project Instructions

- [Introduction](Introduction)
- [Project Summary](Project%20Summary)
- [Development Strategy](Development%20Strategy)
- [Credits](Credits)

## Introduction

This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

## Project Summary

You will be building a travel application. The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter; we are going to use the Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it’s that specific. So, we’ll need to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API.

## Development Strategy

### 1. Get webpack set up to work with this project.

- Create your `src` folder first. The `src` folder should contain a client folder and a server folder.
- Your server folder should contain your `server.js` content.
- Your client folder should contain a `js` folder, `media` folder, `styles` folder, and `views` folder, as well as an `index.js` file.
- Your application js should go into the `js`file, your css into `styles`, and your index.html into `views`.
- Convert your stylesheet from a `.css` file to a `.scss` file
- Your `index.js` file inside the `client` folder should import the main function of your application javascript, it should import your scss, and it should export your main function from your application javascript.
- Now that your `src` folder is set up, it’s time to get webpack going. We need to add babel, babel loader, css loader, file loader, html loader, html webpack plugin, node sass, sass loader, style loader, webpack, webpack cli, and webpack dev server..
- update the scripts in `package.json`. You will want to have `test`, `dev`, `start`, and `build`.
- Get your webpack config set up.
- To get webpack running, you’ll want to first run npm run dev, then npm build to get your dist folder created. Once that is created you can run npm run dev and npm start simultaneously to have hot loading of your project as well as a working express environment.

### 2. Create an account with [Geonames](http://www.geonames.org/login)

- What information needs to get?
- We want to get the latitude, longitude, country.

<<<<<<< HEAD

### Note:

> - The geoname api outputs multiple objects. How do we call the first object?

### 3. Create an account with [Weatherbit](https://www.weatherbit.io/account/create)

- What information needs to get?
- How to pass values from geonames into weatherbit API to get needed information?
- How does the Weatherbit API distinguish from the current forecast and future forecasts? Does the API change in any way?
- How will we include the date? What format does it need to be in? How can we change it to the appropriate format?

### 4. Create an account with [Pixabay](https://pixabay.com/accounts/register/)

- What Parameters will you want to set to pull in images?
- How will you submit your data from the location field to a Pixabay URL parameter without having spaces in the url?

### 5.Choose one of the items from the suggested list to add in

### I choose to add this optional item

1. Add end date and display length of trip.

### 6.Add in services workers

## Credits

- Great thanks to [Udacity](https://www.udacity.com/) and its team. they are very helpful 😍.
- Great thanks to many developers in Youtube. I have learned so much from them.
- Great thanks to stackoverflow community.
