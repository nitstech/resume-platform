# 📄 Resume Platform

A full-stack **Resume Builder Web Application** that allows users to create, manage, and store professional resumes with secure authentication.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based Login/Register)
* 📄 Create & manage resumes
* 🧩 Structured sections (Education, Skills, etc.)
* 🌐 REST API backend
* ⚡ Fast React frontend
* 🗂️ MongoDB integration
* 🧪 Postman API testing support

---

## 🛠️ Tech Stack

**Frontend:** React.js, HTML, CSS, JavaScript
**Backend:** Node.js, Express.js
**Database:** MongoDB
**Tools:** JWT, dotenv, Postman

---

## 📂 Project Structure

resume-platform/
├── backend/ (models, routes, auth.js, server.js, .env)
├── frontend/ (public, src)
├── Postman JSON/
└── README.md

---

## ⚙️ Setup

git clone https://github.com/nitstech/resume-platform.git
cd resume-platform

### Backend

cd backend
npm install

Create `.env` file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

npm start

### Frontend

cd frontend
npm install
npm start

---

## 🔗 API (Sample)

* POST /api/auth/register
* POST /api/auth/login
* GET /api/resume
* POST /api/resume

---

## 🎯 Future Improvements

* 📥 PDF Download
* 🎨 Resume Templates
* 🤖 AI Resume Suggestions
* ☁️ Cloud Storage

---

## 👨‍💻 Author

**Nitesh Gupta**
GitHub: https://github.com/nitstech

---

## ⭐ Support

Give a ⭐ if you like this project!


