🔐 Auth App (React + API)
A simple authentication application built using React.js that allows users to register, login, view profile details, and logout.

🚀 Features
-User Registration
-User Login
-User Profile Page
-Logout Functionality
-Form Validation
-Responsive UI using Tailwind CSS

🛠️ Tech Stack
-Frontend: React.js
-Routing: React Router DOM
-Styling: Tailwind CSS
-API: https://api.freeapi.app

📂 Project Structure

src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── User.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx


⚙️ Installation & Setup

1.Clone the repository

git clone https://github.com/your-username/auth-app.git


2.Navigate to project folder

cd auth-app

3.Install dependencies

npm install

4.Run the project

npm run dev


🔑 API Endpoints Used

-Register → /register
-Login → /login
-Get Current User → /current-user
-Logout → /logout


Base URL:

https://api.freeapi.app/api/v1/users


⚠️ Known Issues

-Password field is visible (should use type="password")
-No token-based authentication (uses localStorage)
-Logout API response not fully handled

📌 Future Improvements

-Add JWT authentication
-Implement Protected Routes
-Improve error handling
-Convert project to TypeScript

👨‍💻 Author
Ajay Kumar
