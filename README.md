# 🏨 Luxury Taj Palace Hotel & Resort Management System

A full-stack luxury hotel booking and administration platform built with **React 19**, **Vite**, **Framer Motion**, **Node.js**, **Express 5**, and **MySQL**.

---

## 🌟 Key Features

- **Guest Portal**:
  - Interactive Luxury Room Showcase with dynamic guest filtering, pricing, and live database sync.
  - Fine Dining Restaurant & Bar menu browsing with instant order simulation.
  - Interactive amenities showcase (Spa, Infinity Pool, Valet, 24/7 Concierge).
  - Customer contact and inquiry submissions.
  - User registration & JWT authentication.

- **Admin Management Panel**:
  - Live analytics dashboard (total bookings, revenue calculations, active guests, and statistics via Recharts).
  - Room inventory CRUD with direct image uploads via Multer.
  - Food menu item CRUD with pricing and image attachments.
  - Hotel property & amenities manager.
  - Customer & booking reservation management.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, React Router DOM v7, Framer Motion, Recharts, React Icons, React Toastify, Axios |
| **Backend** | Node.js (ES Modules), Express 5, MySQL2, JWT, Multer (File uploads), Bcryptjs, Cors, Dotenv |
| **Database** | MySQL 8.0+ |

---

## 📁 Project Structure

```
rutu project/
├── backend/
│   ├── config/           # MySQL database pool connection
│   ├── controllers/      # Route controllers (Room, Food, Hotel, Auth, Admin)
│   ├── middleware/       # JWT auth & Multer file upload handlers
│   ├── routes/           # RESTful API route definitions
│   ├── uploads/          # Static uploaded images
│   ├── server.js         # Express server entry point
│   ├── package.json
│   └── .env.example      # Environment variables template
├── frontend/
│   ├── public/           # Static icons and assets
│   ├── src/
│   │   ├── admin/        # Admin panel pages (Dashboard, RoomsAdmin, FoodAdmin, Hotels, etc.)
│   │   ├── components/   # Navbar, Footer, ServiceCard, Amenities widgets
│   │   ├── pages/        # Public pages (Home, Rooms, RoomDetails, Food, About, Contact, Login, Register)
│   │   ├── App.jsx       # Routing configuration
│   │   └── main.jsx      # React root
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── database.sql          # Complete MySQL database schema & tables
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Database Setup

1. Open phpMyAdmin or MySQL CLI.
2. Import `database.sql` to generate the `luxury_hotel` database and tables:

   ```bash
   mysql -u root -p < database.sql
   ```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MySQL credentials
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📄 License

ISC License

**Project By ~Rutuja Chandgude & Shreyash Anawane**
