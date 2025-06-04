# Forum App Frontend

## Overview
This is the frontend part of the Forum App, a web application that allows users to register, log in, and participate in discussions by asking and answering questions. The frontend is built using React and communicates with the backend via a RESTful API.

## Technologies Used
- React
- React Router
- CSS
- JavaScript

## Project Structure
```
frontend
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # React components
│   │   ├── Login.js       # Login component
│   │   ├── Register.js    # Registration component
│   │   ├── Dashboard.js    # Dashboard component
│   │   ├── CategoryMenu.js  # Category selection component
│   │   └── QuestionList.js  # List of questions component
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for React application
│   └── styles
│       └── main.css        # CSS styles
├── package.json            # Frontend dependencies and scripts
└── README.md               # Documentation for the frontend
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd forum-app/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the frontend application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Usage
- **Login**: Users can log in using their credentials. If the login is successful, they will be redirected to the Dashboard.
- **Register**: New users can create an account by filling out the registration form.
- **Dashboard**: After logging in, users can view categories and questions, and participate in discussions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.