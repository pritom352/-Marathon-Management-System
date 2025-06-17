# 🏃‍♂️ Runova – Marathon Management System 🏃‍♀️

Runova is a full-stack Marathon Management System that allows users to create, manage, explore, and register for marathon events seamlessly. It connects event organizers with participants through an intuitive and responsive interface while ensuring secure user authentication and efficient data handling using Firebase, MongoDB, and JWT.

## 🌐 Live Site

🔗 [Runova Live Site]()

---

## ✨ Key Features

- 👥 **Secure Authentication**: Email/password and Google login using Firebase Auth with JWT protection on private routes.
- 🏁 **Marathon Lifecycle Management**: Add, update, delete marathons; manage registration count dynamically.
- 📆 **Smart Event Registration**: Register for open events only; real-time countdown to marathon using `react-countdown-circle-timer`.
- 🧑‍💼 **Dashboard Features**:
  - My Marathon List (created events)
  - My Apply List (events user registered in) with search and update/delete support.
- 🔍 **Advanced Search & Sort**:

  - Server-side search by marathon title and location using MongoDB’s `$regex`

- 🌙 **Dark/Light Theme Toggle**: Seamless switch for accessibility and user preference.
- 📱 **Fully Responsive UI**: Optimized for mobile, tablet, and desktop screens.
- 🧠 **Clean UX Enhancements**:
  - SweetAlert for feedback (success/error)
  - Spinner on load states
  - Custom 404 Not Found page
  - Dynamic page titles using `react-helmet`

---

## 🔐 Tech Stack

### Frontend:

- **React 18**
- **Tailwind CSS 4.1**
- **Lottie Animations** via `lottie-react`
- **Axios**, `react-helmet`, `react-datepicker`, `sweetalert2`
- **Countdown & CountUp Animations**

### Backend:

- **Node.js & Express.js**
- **MongoDB (Atlas)**
- **JWT Authentication**
- **dotenv** for secure environment variables

---
