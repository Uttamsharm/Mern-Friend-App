# MERN Friend App

A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to search and add friends, manage friend requests, and receive friend recommendations based on mutual connections.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Friend List Management:** Search for users, send friend requests, and unfriend friends.
- **Friend Recommendations:** Based on mutual connections.
- **Responsive Design:** Clean and user-friendly UI that works on all devices.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT & bcrypt
- **Styling:** CSS Modules

---

## Installation Instructions

### 1. **Clone the Repository**
git clone https://github.com/your-username/mern-friend-app.git
cd mern-friend-app

 2.** Backend Setup**

 cd backend
npm install

Create a .env File

PORT=5000
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-secret-key

Start the backend server:
npm run dev

3. Frontend Setup
   cd ../frontend
  npm install

Start the frontend:

npm start


Here’s a sample README.md for your project, which includes detailed instructions and descriptions:

markdown
Copy
Edit
# MERN Friend App

A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to search and add friends, manage friend requests, and receive friend recommendations based on mutual connections.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Friend List Management:** Search for users, send friend requests, and unfriend friends.
- **Friend Recommendations:** Based on mutual connections.
- **Responsive Design:** Clean and user-friendly UI that works on all devices.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT & bcrypt
- **Styling:** CSS Modules

---

## Installation Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/mern-friend-app.git
cd mern-friend-app
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env File
env
Copy
Edit
PORT=5000
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-secret-key
Start the backend server:

bash
Copy
Edit
npm run dev

3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Start the frontend:
npm start

Usage
Open your browser and visit http://localhost:3000.
Create a new account or log in with an existing one.
Search for friends, send requests, and manage your connections.

Folder Structure
Frontend (/frontend)

src/
├── components/
│   ├── Auth/
│   ├── Friends/
│   └── UI/
├── pages/
├── services/
└── App.jsx

Backend (/backend)

src/
├── controllers/
├── models/
├── routes/
└── server.js


Here’s a sample README.md for your project, which includes detailed instructions and descriptions:

markdown
Copy
Edit
# MERN Friend App

A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to search and add friends, manage friend requests, and receive friend recommendations based on mutual connections.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Friend List Management:** Search for users, send friend requests, and unfriend friends.
- **Friend Recommendations:** Based on mutual connections.
- **Responsive Design:** Clean and user-friendly UI that works on all devices.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT & bcrypt
- **Styling:** CSS Modules

---

## Installation Instructions

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/mern-friend-app.git
cd mern-friend-app
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env File
env
Copy
Edit
PORT=5000
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-secret-key
Start the backend server:

bash
Copy
Edit
npm run dev
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Start the frontend:

bash
Copy
Edit
npm start
Usage
Open your browser and visit http://localhost:3000.
Create a new account or log in with an existing one.
Search for friends, send requests, and manage your connections.
Folder Structure
Frontend (/frontend)
css
Copy
Edit
src/
├── components/
│   ├── Auth/
│   ├── Friends/
│   └── UI/
├── pages/
├── services/
└── App.jsx
Backend (/backend)

src/
├── controllers/
├── models/
├── routes/
└── server.js


API Endpoints

POST /api/auth/signup: Register a new user
POST /api/auth/login: Authenticate a user
GET /api/friends/search: Search for users
POST /api/friends/add: Send a friend request
GET /api/friends/recommendations: Get friend recommendations






