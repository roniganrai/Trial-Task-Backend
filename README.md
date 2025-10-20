# Resume Builder Backend (Trial Task - Backend Developer)

**Submitted by:** Roni Ganrai  
**Role:** Backend Developer  
**Tech Stack:** Node.js · Express.js · MongoDB · JWT · Bcrypt · CORS · dotenv

---

## Project Overview

This project is a backend system for a Resume Builder platform, developed as part of the Trial Task for the Backend Developer role.

It provides:

- Secure user authentication
- Full resume data management (CRUD)
- Optional AI-based summary generation

All APIs follow RESTful principles and are designed to integrate seamlessly with a React + Tailwind + Framer Motion frontend, where users can create and preview resumes dynamically.

---

## Features Implemented

### 1. Authentication & User Management

- Register and login with JWT-based authentication
- Passwords securely hashed using bcryptjs
- Fetch authenticated user profile via `/api/auth/me`

### 2. Resume Management (CRUD)

- Create or update user resume
- Fetch individual or logged-in user's resume
- Delete resume

**Resume data includes:**

- Personal Information
- Profile Summary
- Education
- Technical Skills
- Projects
- Internship Details
- Certifications
- Additional Information (Languages Known)

### 3. Cross-Platform Integration APIs

- Simulated endpoints for Hackathons / Achievements (`/api/integrations/hackathon`)
- Courses / Certifications (`/api/integrations/course`)
- Auto-updates user’s resume with new achievements

### 4. AI/Automation

- `/api/ai/generate-summary`
- Automatically generates a professional profile summary from user’s skills, projects, and internship data

### 5. Modular & Scalable Architecture

- MVC pattern: Routes → Controllers → Models → Middleware
- Organized folder structure for easy extension
- Centralized error handling middleware

---

## Folder Structure

🗂️ Folder Structure
resume-backend/
├── config/
│ └── db.js
├── controllers/
│ ├── aiController.js
│ ├── authController.js
│ ├── integrationController.js
│ └── resumeController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ └── Resume.js
├── routes/
│ ├── aiRoutes.js
│ ├── authRoutes.js
│ ├── integrationRoutes.js
│ └── resumeRoutes.js
├── .env.example
├── package.json
├── server.js
└── README.md

---

## Technologies Used

| Category              | Tool / Library                  |
| --------------------- | ------------------------------- |
| Backend Framework     | Express.js                      |
| Database              | MongoDB + Mongoose              |
| Authentication        | JWT (jsonwebtoken)              |
| Password Hashing      | bcryptjs                        |
| Environment Variables | dotenv                          |
| CORS Support          | cors                            |
| Error Handling        | express-async-handler           |
| AI / Automation       | Custom heuristic (OpenAI-ready) |

---

## Installation & Setup

1️. Clone Repository

```bash
git clone https://github.com/yourusername/resume-backend.git
cd resume-backend


2️. Install Dependencies
npm install

3️. Setup Environment Variables

Create a .env file using .env.example:

PORT=5000
MONGO_URI=mongodb://localhost:27017/resume_db
JWT_SECRET=your_strong_secret_key
JWT_EXPIRES_IN=7d

4️. Run the Server

Development mode: npm run dev

Production mode: npm start

Server runs at ➜ http://localhost:5000

```

---

# API Documentation

### User Authentication

Method Route Description Auth
POST `/api/auth/register` Register new user
POST `/api/auth/login` Login user & get JWT token
GET `/api/auth/me` Get logged-in user info

### Resume APIs

Method Route Description Auth
POST `/api/resume` Create or update resume for user
GET `/api/resume/me` Get logged-in user’s resume
GET `/api/resume/:userId` Publicly fetch a user’s resume by ID
DELETE `/api/resume/me` Delete resume of logged-in user

-- Resume Schema Includes: name, contact, profile, education, skills, projects, internship, certifications, additional

### Integration APIs

Method Route Description Auth
POST `/api/integrations/hackathon` Add hackathon achievement
POST `/api/integrations/course` Add course/certification

### AI / Automation APIs

Method Route Description Auth
POST `/api/ai/generate-summary` Generate professional summary from resume data

Example Request:

{
"skills": ["React", "Node.js", "MongoDB"],
"projects": [{"title": "SmartQueue"}],
"internship": {"org": "Zidio Development"}
}

Response:

{
"summary": "Passionate software developer skilled in React, Node.js, MongoDB. Built 1 project showcasing hands-on experience. Interned at Zidio Development."
}

---

# Design Choices

- JWT Authentication: Secure stateless session management.

- MongoDB: Flexible document-based storage for dynamic resume data.

- Modular Controllers: Clean separation of concerns.

- Error Middleware: Centralized error handling for consistent API responses.

- Scalable Schema: Easily expandable for new sections (Achievements, Publications, etc.)

- AI Integration Ready: aiController structured for plug-and-play OpenAI integration.

### Deployment Notes

- Use MongoDB Atlas for database hosting

- Host backend on Render

- For frontend integration, base URL → https://your-backend-domain.com/api

### Future Enhancements (if Require from your side)

- Add OpenAI API for better summary & section auto-fill

- Add file upload (PDF / Profile Picture) using AWS S3 or Cloudinary

- Add validation middleware (Joi / express-validator)

- Add role-based access for Admin (manage resumes globally)

### This backend connects directly to your React frontend:

# Frontend Action Backend API

- Register / Login `/api/auth/register` & `/api/auth/login`
- Save Resume POST `/api/resume`
- Fetch Resume GET `/api/resume/me`
- Download Resume PDF handled in frontend (React + react-to-print)
- Generate Summary `/api/ai/generate-summary`

---

- All Backend Developer Trial Task requirements from the document are fully implemented.
- The project demonstrates authentication, resume CRUD, integrations, and automation.
- Modular, scalable, and clean codebase suitable for real production use.

- This backend is ready for integration, deployment, and submission as a complete Trial Task project.

### Developed by:

    [Roni Ganrai]
    [roniganrai2029@gmail.com]
    [ECE 4th Year]
    [Heritage Institute of Technology, Kolkata]

```

```
