# Movie Browser 🎬

## Overview

Movie Browser is a React application that allows users to search for movies, view detailed information, and navigate between various pages. This project utilizes The Movie Database (TMDb) API to fetch movie data and display it in an intuitive interface.

## Features

- Search for movies by title
- View movie details, including genres, ratings, and descriptions
- Responsive design optimized for various screen sizes
- Simple and intuitive navigation
- Installation

## Components

### Navbar
* File: Navbar.js
* Description: The Navbar component is a responsive navigation bar for navigating the application. It includes links to the Home    and About pages and a search input. When the user types in the search input, they are redirected to the search page where they    can view results matching their query.
* Props:
   * searchText: The current search text.
   * setSearchText: Function to update the search text state in the parent component.
### Home
* File: Home.js
* Description: The Home component is the landing page for the application. It serves as the main page for users to start            exploring the application.
* Usage: Displays a welcome message or introductory content about the Movie Browser.
### AboutView
* File: AboutView.js
* Description: The AboutView component provides information about the Movie Browser project, its purpose, and its creators. This    is a static informational page.
* Usage: Used to showcase details about the app and possibly the developers or contributors.
### Hero
* File: Hero.js
* Description: The Hero component is a reusable, large header or banner that displays a prominent title or message at the top of    pages. In the search view, it displays the search query, while in other pages, it shows relevant headings.
* Props:
   * text: The text to be displayed in the hero banner.
### SearchView
* File: SearchView.js
* Description: The SearchView component displays search results for movies based on user input. It sends requests to the TMDb API   and displays movie cards for each result.
* Props:
   * keyword: The search keyword entered by the user.
   * searchResults: Array of search results returned by the API.
   * Usage: Renders individual MovieCard components for each search result, along with a message if no results are found.
### MovieView
* File: MovieView.js
* Description: The MovieView component displays detailed information about a single movie, including title, description, genres,    vote count, and rating. It also includes the movie's poster image.
* Props:
   * movieId: ID of the movie to fetch details for.
   * Usage: Fetches movie details from the API using the provided movie ID and displays it.
### NotFound
* File: NotFound.js
* Description: The NotFound component is a fallback page for any routes that do not match existing components. It displays a "404   - Page Not Found" message and provides a link to return to the home page.
* Usage: Shown when a user tries to access a page that does not exist in the application.

## Getting started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DvirUliel/React-Movie-Browser.git
   
2. **Navigate to the project directory**:
   ```bash
   cd React-Movie-Browser
   
3. **Install dependencies**:
   ```bash
   npm install
   
4. **Add your TMDb API key to the .env file**:
   ```bash
   REACT_APP_API_KEY=your_tmdb_api_key
   
5. **Run the project**:
   ```bash
   npm start
