# Forum App Backend

## Overview
This is the backend for the Forum App, a web application that allows users to register, log in, and participate in discussions by asking and answering questions. The application follows a 3-tier architecture, consisting of a data layer, application layer, and presentation layer.

## Technologies Used
- Node.js
- Express.js
- MongoDB (or MySQL, depending on your choice)
- JSON Web Tokens (JWT) for authentication

## Project Structure
```
forum-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
├── database
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB or MySQL database

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd forum-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your database:
   - For MongoDB, ensure your MongoDB server is running and update the connection string in `src/app.js`.
   - For MySQL, create a database and run the SQL schema provided in `database/schema.sql`.

4. Seed the database (optional):
   ```
   node database/seed.js
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints
- **Authentication**
  - `POST /api/auth/signup` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **Questions**
  - `GET /api/questions` - Retrieve all questions
  - `POST /api/questions` - Create a new question
  - `GET /api/questions/:id` - Retrieve a specific question
  - `POST /api/questions/:id/answer` - Answer a specific question

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by various online forums and Q&A platforms.
- Thanks to the contributors and the open-source community for their support.