# She Can Foundation - Contact Form

A simple full-stack contact form built as part of the She Can Foundation Full Stack Development Internship Task.

The application allows users to submit their name, email address, and a message through a clean and responsive interface. Submitted data is stored in MongoDB using a Node.js and Express backend.

## Features

* Modern responsive UI built with React and Tailwind CSS
* Contact form with Name, Email, and Message fields
* Form submission using Axios
* REST API built with Express.js
* MongoDB database integration using Mongoose
* Success message displayed after submission
* Loading state while submitting the form

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
she-can-foundation/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd she-can-foundation
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shecan
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

The backend will run on:

```text
http://localhost:5000
```

## API Endpoint

### Submit Contact Form

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from the contact form"
}
```

## Future Improvements

* Email validation
* Admin dashboard for viewing submissions
* Authentication and authorization
* Form analytics


## About

This project was developed as a submission for the She Can Foundation Internship Task to demonstrate basic full-stack development skills using the MERN stack.
