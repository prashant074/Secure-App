# Secure-App: Full Stack Authentication System

## Overview
This repository contains a full-stack authentication system with separate frontend and backend implementations. The backend is built with Node.js and Express, using MongoDB for data storage and Mailtrap for email handling. The frontend is built with React, Vite, and Tailwind CSS.

## Features
- **User Registration**: Register new users with email, password, and name.
- **Email Verification**: Verify user email addresses using tokens.
- **Password Reset**: Request and reset passwords.
- **Login/Logout**: Authenticate users and manage sessions.
- **Protected Routes**: Ensure only authenticated users can access certain pages.

## Backend Setup

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following content:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
    JWT_SECRET=<your-jwt-secret>
    MAILTRAP_API_KEY=<your-mailtrap-api-key>
    CLIENT_URL=<your-client-url>
    ```

4. **Run the Server**:
    ```bash
    npm start
    ```

### Backend API Endpoints
- `POST /api/signup`: Register a new user.
- `POST /api/verify-email`: Verify user’s email with a token.
- `POST /api/login`: Log in a user.
- `POST /api/logout`: Log out a user.
- `POST /api/forgot-password`: Request a password reset link.
- `POST /api/reset-password`: Reset the password using a reset token.
- `GET /api/check-auth`: Check if the user is authenticated.

---

## Frontend Setup

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
   Create a `.env` file in the `frontend` directory with the following content:
    ```env
    VITE_API_URL=http://localhost:5000/api
    ```

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    ```

---

## Frontend Folder Structure
- `src/components/`: Contains reusable React components.
- `src/pages/`: Contains different pages of the application.
- `src/utils/`: Contains utility functions.
- `src/styles/`: Contains Tailwind CSS configuration and custom styles.

---

## Tools and Technologies

### Backend:
- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mailtrap**: Email testing tool.
- **bcryptjs**: Password hashing.
- **crypto**: Secure token generation.
- **jsonwebtoken**: JWT for authentication.

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Superset of JavaScript for type safety.

---

## Troubleshooting

### Backend:
- Ensure your MongoDB URI is correct and that your IP address is whitelisted in MongoDB Atlas.
- Verify your Mailtrap credentials and configuration.
- Check the `.env` file for missing or incorrect variables.

### Frontend:
- Make sure the backend server is running and accessible at the specified API URL.
- Verify that environment variables are correctly set.
- Check the browser console for any errors during development.

---
## Screenshots of System in Action

### Figure 1: Registration page with password strength feedback and CAPTCHA validation.
![Registration Page](screenshot/register.png)

### Figure 2: Email verification with OTP entry.
![Email Verification](screenshot/verifyemail.png)

### Figure 3: Login page for registered users.
![Login Page](screenshot/login.png)

### Figure 4: Welcome message from Company in email after login.
![Welcome Email](screenshot/welcomemessage.png)

### Figure 5: Dashboard accessible after successful login.
![Dashboard](screenshot/Dashboard.png)

### Figure 6: Password reset request page.
![Password Reset Request](screenshot/passwordreset.png)

### Figure 7: Error handling for invalid inputs (e.g., wrong OTP or incorrect login).
![Error Handling](screenshot/error-handling.png)

### Figure 8: Saved user data in MongoDB.
![User Data in MongoDB](screenshot/mongodb.png)
---

## Contribution Guidelines
Contributions to enhance the functionality and security of this project are welcome. To contribute:
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request with a detailed description of your modifications.

---

## Contact Information
For any inquiries or feedback, please reach out to:

Email: your-email@example.com

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Important
Replace placeholders like `<repository-url>`, `<username>`, `<password>`, `<cluster-url>`, `<dbname>`, `<your-jwt-secret>`, `<your-mailtrap-api-key>`, and `<your-client-url>` with your actual values.
### Instructions
- Make sure to replace the placeholders with your actual information, especially the repository URL and any sensitive credentials.
- Add screenshots or other relevant visuals where indicated to enhance your documentation.
