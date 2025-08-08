# 🏃‍♂️ Runova – Marathon Management System 🏃‍♀️

**Runova** is a full-stack Marathon Management System that allows users to create, manage, explore, and register for marathon events with ease. It bridges the gap between event organizers and participants through a responsive and intuitive interface. The system ensures secure authentication, smart registration, and efficient data handling using **Firebase**, **MongoDB**, and **JWT**.

---

## 🌐 Live Site

🔗 [Live Site](https://effervescent-otter-ee5a9f.netlify.app/)

---

## ✨ Key Features

- 👥 **Secure Authentication**: Login with email/password or Google using Firebase Auth, protected with JWT on private routes.
- 🏁 **Marathon Event Management**: Add, update, and delete events; manage registration count dynamically.
- 📆 **Smart Registration**: Register for available events only; real-time countdown using `react-countdown-circle-timer`.
- 🧑‍💼 **User Dashboards**:
  - My Marathon List (events created by the user)
  - My Apply List (events the user registered for), with search, update, and delete options
- 🔍 **Advanced Search & Sort**:
  - Server-side search by title and location using MongoDB's `$regex`
- 🌙 **Dark/Light Theme Toggle**
- 📱 **Fully Responsive Design**
- 🧠 **Enhanced UX**:
  - SweetAlert2 for success/error feedback
  - Loading spinners
  - Custom 404 page
  - Dynamic page titles using `react-helmet`

---

## 🔐 Tech Stack

### Frontend:

- **React 18**
- **Tailwind CSS 4.1**
- **Lottie** (via `lottie-react`)
- **Axios**
- `react-helmet`, `react-datepicker`, `sweetalert2`
- `react-countdown-circle-timer`, `react-countup`

### Backend:

- **Node.js**, **Express.js**
- **MongoDB (Atlas)**
- **JWT Authentication**
- **dotenv** for environment variables

---

## 📦 Dependencies

- `react-router-dom`
- `firebase`
- `axios`
- `jsonwebtoken`
- `cors`, `dotenv`, `express`, `mongodb`, `cookie-parser`
- `lottie-react`, `sweetalert2`, `react-datepicker`, `react-helmet`

---

## 🛠️ Getting Started (Run Locally)

### 🔧 Prerequisites:

- Node.js
- MongoDB account (or local MongoDB)
- Firebase account

### 📂 Clone the repository

- `git clone https://github.com/pritom352/-Marathon-Management-System.git`

### 🔐 Setup environment variables

Create a `.env.local` file in the root directory and add the following:

`VITE_apiKey=your_firebase_api_key`
``VITE_authDomain=your_project.firebaseapp.com`
`VITE_projectId=your_project_id`
`VITE_storageBucket=your_project_storage_bucket`
`VITE_messagingSenderId=your_messaging_sender_id`
`VITE_appId=your_firebase_app_id`

🚀 Run the frontend
`npm run dev`

## API_URL

`https://assignmein11.vercel.app/`
