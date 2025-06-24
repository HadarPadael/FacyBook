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
  *Development:
  1) Run the React application:
  ```bash
  npm start
  ```
  This will automatically open a react development server in a new tab in your default browser.
  If you simply want to alter the design without use of data fetched by the server, this alone will do.
  Otherwise, follow the next step:

  2) Retrieve the server from its own repository and start it in a separate terminal (for side-by-side development):
  ```bash
  nodemon start
  ```
  *production:
  1) In the server terminal run:
  ```bash
  node app.js
  ```
  This will use the build files that already exist in the servers' "public" directory.
  
  1.1) If you wish to use your build files after preforming changes in the react enviornment,
  simply run (in the React enviornment):
  ```bash
  npm run build
  ```
  and replace the existing build files with the newly created ones.

  2) To see Facybook in action after preforming step 1, open your browser and navigate to http://localhost:PORT (PORT should be specified in the facyBook-server output            to terminal)

## API Communication
The Facybook app interacts with a Node.js server through API calls. The server handles user authentication, account management, and data retrieval for the feed. Ensure that the backend is running before interacting with the app to enable smooth API communication.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any feature enhancements or bug fixes.
