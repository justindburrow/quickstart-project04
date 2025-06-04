Justin Burrow
Quickstart Coding Bootcamp Project 04
https://justindburrow.github.io/quickstart-project04/

# Forum App

## Overview
The Forum App is a web application that allows users to register, log in, and participate in discussions by asking and answering questions. The application uses a 3-tier architecture: a backend API (Node.js/Express), a frontend client (React), and a MongoDB database.

## Live Demo
- **Frontend:** [https://justindburrow.github.io/quickstart-project04](https://justindburrow.github.io/quickstart-project04)
- **Backend API:** [https://quickstart-project04.onrender.com](https://quickstart-project04.onrender.com)

## Project Structure
- **backend**: Express API, controllers, models, routes, middleware.
- **frontend**: React app, components, styles.
- **database**: (Optional) Seed data for testing.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, CSS

## Features
- User registration and login
- Ask and answer questions
- Categorize questions
- Responsive design

## Setup Instructions

### Backend
1. `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server: `npm start`

### Frontend
1. `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file with:
   ```
   REACT_APP_API_URL=https://quickstart-project04.onrender.com
   ```
4. Start the app: `npm start`

## API Endpoints
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user
- **GET /api/questions**: Retrieve all questions
- **POST /api/questions**: Create a new question
- **GET /api/questions/:id**: Retrieve a specific question

## Usage
- Register a new account.
- Log in with your credentials.
- Ask questions, answer others, and browse by category.

## License
MIT License