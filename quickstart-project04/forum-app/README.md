# Forum App

## Overview
The Forum App is a web application that allows users to register, log in, and participate in discussions by asking and answering questions. The application is built using a 3-tier architecture, consisting of a backend API, a frontend client, and a database.

## Project Structure
The project is organized into three main directories:

- **backend**: Contains the server-side code, including the Express application, controllers, models, routes, and middleware.
- **frontend**: Contains the client-side code, built with React, including components, styles, and the main application entry point.
- **database**: Contains the database schema and seed data for testing.

## Technologies Used
- **Backend**: Node.js, Express, MongoDB (or MySQL)
- **Frontend**: React, CSS
- **Database**: MongoDB (or MySQL)

## Features
- User registration and login functionality
- Ability to ask and answer questions
- Categorization of questions
- Responsive design for a better user experience

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your database (MongoDB or MySQL) and update the connection settings in the `app.js` file.
4. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Log in an existing user
- **GET /api/questions**: Retrieve all questions
- **POST /api/questions**: Create a new question
- **GET /api/questions/:id**: Retrieve a specific question

## Database Schema
The database schema includes tables for users and questions, with relationships defined between them.

## Example Data
The `seed.js` file contains example data to populate the database for testing purposes.

## License
This project is licensed under the MIT License.