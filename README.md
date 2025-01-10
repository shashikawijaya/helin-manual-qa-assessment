# Buggy React + Node.js Application

This is a simple buggy application designed for UI-level manual testing.

## Features
- React frontend with intentional UI bugs.
- Node.js backend with functional issues.

## Setup Instructions

### Prerequisites
- Node.js installed on your system.

### Steps
1. Navigate to the `frontend` folder:
   ```
   cd frontend
   npm install
   npm start
   ```

2. In a new terminal, navigate to the `backend` folder:
   ```
   cd backend
   npm install
   npm start
   ```

3. Open the frontend in your browser at `http://localhost:3000`.

## Intentional Bugs
1. Placeholder typo in the input field.
2. Adds blank users without validation.
3. Error message misalignment in the UI.
4. Displays duplicate usernames in the user list.
5. 500 error for empty GET request in the backend.
6. Allows duplicate usernames to be added.
