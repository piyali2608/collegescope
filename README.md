# 🎓 CollegeScope — Discover India's Best Colleges

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-7.x-black.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Technical Highlights
*   **Live Wikipedia Orchestration**: Custom proxy service fetching real-time data and campus imagery directly from Wikipedia.
*   **Relational Persistence**: Uses **PostgreSQL** with **Prisma ORM** to manage user sessions and comparison lists.
*   **Secure Auth Pipeline**: Industry-standard security using **JWT** for sessions and **bcryptjs** for password hashing.
*   **Comparison Engine**: Real-time side-by-side analytics for Fees, Placements, and Ratings.

## 🛠️ Tech Stack
*   **Frontend**: HTML5, CSS3, JavaScript (ES6+).
*   **Backend**: Node.js, Express.js.
*   **Database**: PostgreSQL via Prisma.
*   **Security**: Helmet, CORS, JWT, Bcryptjs.


## 👤 Author
*   **Piyali Barman**

## 🚀 Key Features

*   **Live Wikipedia Orchestration:** A custom backend proxy fetches real-time descriptions and high-quality campus imagery directly from Wikipedia, bypassing frontend CORS limitations.
*   **Side-by-Side Analytics Engine:** Users can select up to 3 colleges and compare them dynamically across critical metrics (Fees, Placements, Ratings). The engine automatically highlights the "best value" in each category.
*   **Secure Authentication Pipeline:** Industry-standard security using **JSON Web Tokens (JWT)** for session management and **bcryptjs** for password encryption.
*   **Relational Persistence:** A **PostgreSQL** database managed via **Prisma ORM** ensures user accounts and "Favorite/Compare" lists are securely saved across sessions.
*   **Glassmorphic UI:** A premium, responsive interface built with custom CSS variables, horizontal scrolling, and modern typography (`Syne` and `Bricolage Grotesque`).

---

## 🛠️ Tech Stack

### Frontend
*   **Architecture:** Vanilla HTML5, CSS3, JavaScript (ES6+)
*   **Styling:** Custom Glassmorphism, CSS Grid/Flexbox
*   **State Management:** LocalStorage & DOM Manipulation

### Backend
*   **Environment:** Node.js
*   **Framework:** Express.js
*   **Security:** Helmet, CORS, Bcryptjs, JWT
*   **External API:** Axios (for Wikipedia REST API orchestration)

### Database & DevOps
*   **Database:** PostgreSQL
*   **ORM:** Prisma Client
*   **Version Control:** Git & GitHub

---

## 📂 Project Structure
```text
collegescope/
├── frontend/             
│   └── index.html        # Main entry point and UI logic
├── backend/              
│   ├── prisma/           
│   │   └── schema.prisma # Database models (User, Favorite)
│   ├── src/
│   │   ├── config/       # Database & Prisma initialization
│   │   ├── controllers/  # Auth & College business logic
│   │   ├── middleware/   # JWT authentication guards
│   │   └── routes/       # API endpoints (Auth, Colleges)
│   ├── .env              # Environment variables (Ignored in Git)
│   └── server.js         # Express App Entry point
└── README.md
⚙️ Installation & Setup (How to Run)
Follow these steps to get the project running on your local machine.

Prerequisites
Node.js (v18 or higher)

PostgreSQL (Installed and running locally)

1. Clone the Repository
Bash
git clone [https://github.com/PiyaliBarman/collegescope.git](https://github.com/PiyaliBarman/collegescope.git)
cd collegescope
2. Backend Setup
Navigate to the backend directory and install dependencies:

Bash
cd backend
npm install
3. Environment Variables
Create a .env file in the backend/ directory and add your configurations:

Code snippet
PORT=5000
# Format: postgresql://USER:PASSWORD@localhost:5432/DATABASE?schema=public
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/collegescope?schema=public"
JWT_SECRET="your_super_secret_jwt_key_here"

FRONTEND_URL="[http://127.0.0.1:5500](http://127.0.0.1:5500)" 
4. Database Migration
Initialize the Prisma client and push the schema to your PostgreSQL database:

Bash
npx prisma generate
npx prisma migrate dev --name init
5. Start the Server
Bash
# Starts the backend on http://localhost:5000
npm run start 



