🚀 Features

🔐 User Authentication (Login/Register using JWT)

📄 Create and manage resumes

🧩 Structured resume sections (education, skills, etc.)

🌐 REST API backend

⚡ Fast React-based frontend

🗂️ MongoDB database integration

🧪 API testing using Postman

🛠️ Tech Stack
Frontend

React.js

HTML, CSS, JavaScript

Backend

Node.js

Express.js

Database

MongoDB

Tools & Libraries

JWT Authentication

dotenv (.env for environment variables)

Postman (API testing)

📂 Project Structure
resume-platform/
│
├── backend/
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── auth.js        # Authentication logic
│   ├── server.js      # Entry point
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .gitignore
│
├── Postman JSON/      # API collection for testing
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/nitstech/resume-platform.git
cd resume-platform
2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm start
🔗 API Endpoints (Example)

POST /api/auth/register → Register user

POST /api/auth/login → Login user

GET /api/resume → Get resumes

POST /api/resume → Create resume

(You can test APIs using the Postman JSON provided in the repo)

📸 Usage

Register/Login

Create your resume

Add details (skills, education, etc.)

Save and manage resumes

🔐 Environment Variables

Make sure to never upload .env file to GitHub.

🎯 Future Improvements

📥 Resume PDF download

🎨 Multiple resume templates

☁️ Cloud storage

🤖 AI-powered resume suggestions

📊 ATS Resume Score

🤝 Contributing

Fork the repo

Create a new branch

Commit changes

Open a Pull Request

👨‍💻 Author

Nitesh Gupta
🔗 GitHub: https://github.com/nitstech

⭐ Support

If you like this project, give it a ⭐ on GitHub!
