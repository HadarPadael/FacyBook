# FacyBook
Facybook is a React-based web application that simulates core Facebook functionalities. It features a modern user interface, reusable components, and a structured architecture to ensure scalability and ease of maintenance.

## Table of Contents
- Overview
- Technologies Used
- Features
- Setup and Running
- API Communication
- Contributing

## Overview
The Facybook project is built with React, leveraging JSX for UI components and CSS for styling. The application simulates a Facebook-like environment with essential pages for user interaction including Login, Signup, and Feed. Each page is further divided into sub-categories and maintains its own dedicated CSS file for component-specific styling, along with a global stylesheet (App.css) for application-wide design consistency.

## Technologies Used
- **React:** For building dynamic, component-based user interfaces using JSX.
- **React Router:** To manage in-app navigation between different pages.
- **React Hooks:**
  * **useState:** For state management within functional components.
  * **useEffect:** For handling side effects such as data fetching and subscriptions.
  * **useContext:** For sharing state and logic across the application.
  * **CSS:** For styling individual components as well as global styles via app.css.
- **Node.js:** The backend server technology that handles API requests.
- **API Integration:** Communication between the React frontend and the Node.js server through RESTful API calls.

## Features
- **Login Page:** Enables users to sign in with their credentials.
- **Signup Page:** Allows new users to create an account.
- **Feed Page:** Displays a stream of posts and interactions similar to a social media feed.
- **Reusable Components:** Promotes code reuse and easier maintenance.
- **Routing:** Seamlessly navigates between Login, Signup, and Feed pages.
- **State Management:** Utilizes React hooks (useState, useEffect, useContext) for efficient state handling.
- **API Communication:** Integrates with a Node.js server to perform CRUD operations and data fetching.

## Setup and Running
- Clone the Repository:
  ```bash
  git clone https://github.com/HadarPadael/FacyBook.git
  cd facybook
  ```
- Install Dependencies:
  ```bash
  cd src
  npm install
  ```
- Start the Application:

* Frontend: Run the React application:
  ```bash
  npm start
  ```
Backend: Retrieve the server from its own repository and start it in a separate terminal (for side-by-side development):

```bash
node app.js
```
(I personally prefer nodemon for development, intall it and run "nodemon start")

- Access the App:
  * If you're in user mode:
    Open your browser and navigate to http://localhost:PORT (PORT should be specified in the facyBook-server .env file) to see Facybook in action.
  * Otherwise, the react should automaticlly open the app in the browser in development mode.

## API Communication
The Facybook app interacts with a Node.js server through API calls. The server handles user authentication, account management, and data retrieval for the feed. Ensure that the backend is running before interacting with the app to enable smooth API communication.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any feature enhancements or bug fixes.
