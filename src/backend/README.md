
# Attendance Tracker Backend

This is the backend service for the Attendance Tracker application. It provides authentication APIs and database connectivity for the application.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory:
   - Copy the `.env.example` file to `.env`
   - Fill in your actual Hostinger MySQL database credentials and JWT secret

3. Set up the database:
   - Create the required tables in your Hostinger MySQL database
   - You can use the SQL commands in `db/schema.sql` to create the tables

4. Start the server:
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- **POST /api/signup**
  - Create a new user account
  - Required body: `name`, `email`, `password`
  - Returns a JWT token on success

- **POST /api/login**
  - Login to an existing account
  - Required body: `email`, `password`
  - Returns a JWT token on success

- **GET /api/profile**
  - Get the current user's profile
  - Requires Authorization header with JWT token
  - Returns user details

### Health Check

- **GET /api/health**
  - Check if the server and database connection are working

## Deployment to Hostinger

1. Upload the backend directory to your Hostinger hosting
2. Install Node.js dependencies on the server
3. Set up a process manager like PM2 to keep the Node.js server running
4. Configure your domain to point to the backend server
5. Update the frontend API_URL to point to your backend domain
