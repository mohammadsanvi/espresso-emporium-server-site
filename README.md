# ☕ Espresso Emporium - Server

This is the **server-side** of the **Espresso Emporium** project, a full-stack coffee management application where users can manage coffee products and user data via a RESTful API.

🌐 **Client-Side Live Site:** [espresso-emporium.web.app](https://espresso-emporium-79433.web.app)  
🔗 **Server Live Link:** [espresso-emporium-server](https://espresso-emporium-server-one-iota.vercel.app/)

---

## 🚀 Features

### 🧾 Coffee Management (CRUD)
- `GET /coffees` – Get all coffee items
- `GET /coffees/:id` – Get a single coffee by ID
- `POST /coffees` – Add a new coffee item
- `PUT /coffees/:id` – Update coffee item by ID
- `DELETE /coffees/:id` – Delete coffee item by ID

### 👥 User Management
- `POST /users` – Add a new user to the database
- `GET /users` – Get all users
- `DELETE /users/:id` – Delete a user by ID
- `PATCH /users` – Update `lastSignInTime` of a user by email

---

## 🛠️ Technologies Used

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **MongoDB Atlas** – Cloud-hosted database
- **dotenv** – Environment variable support
- **cors** – Cross-Origin Resource Sharing

---

## ⚙️ Environment Variables

You need to create a `.env` file at the root of your project with the following:

## Clone And Setup

```bash
git clone https://github.com/mohammadsanvi/espresso-emporium-server-site.git
cd espresso-emporium-server-site
nodemon index.js

Environment Variables

DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
PORT=3000
