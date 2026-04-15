# 🍽️ Restaurant Menu Backend API

A RESTful backend service for managing a restaurant menu system. This project is built with Node.js, Express, PostgreSQL, and Knex, following a clean and modular architecture.

---

## 🚀 Features

* Category management (CRUD)
* Product management (CRUD)
* Ingredient management (CRUD)
* Product ↔ Ingredient many-to-many relationship
* Soft delete support (`deleted_at`)
* Filtering with query parameters
* Modular backend structure (routes, controllers, models)

---

## 🧱 Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **Knex.js**

---

## 📂 Project Structure

```
src/
│
├── config/         # Database configuration
├── controllers/    # Request/response logic
├── models/         # Database queries
├── routes/         # API routes
├── utils/          # Helper functions (logger)
│
├── app.js          # Entry point
```

---

## 🧠 Database Design

### Entities:

* **Categories**
* **Products**
* **Ingredients**
* **Products_Ingredients** (junction table)

### Relationships:

* One-to-Many → Category → Products
* Many-to-Many → Products ↔ Ingredients

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd restaurant-menu-backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
```

---

## 🛠️ Run the Project

```bash
npm run dev
```

---

## 📡 API Endpoints

### 📁 Categories

* `POST /api/v1/categories`
* `GET /api/v1/categories`
* `GET /api/v1/categories/:id`
* `PUT /api/v1/categories/:id`
* `DELETE /api/v1/categories/:id`

---

### 🍔 Products

* `POST /api/v1/products`
* `GET /api/v1/products`
* `GET /api/v1/products/:id`
* `PUT /api/v1/products/:id`
* `DELETE /api/v1/products/:id`

---

### 🧂 Ingredients

* `POST /api/v1/ingredients`
* `GET /api/v1/ingredients`
* `GET /api/v1/ingredients/:id`
* `PUT /api/v1/ingredients/:id`
* `DELETE /api/v1/ingredients/:id`

---

## 🔍 Query Parameters

### Categories

* `showDeleted=true` → get all
* `showDeleted=false` → only active (default)
* `showDeleted=onlyDeleted` → only deleted

---

### Products

* `category=<id>` → filter by category
* `showDeleted` → same as categories

Example:

```
GET /api/v1/products?category=2&showDeleted=onlyDeleted
```

---

## 🧹 Soft Delete Logic

Instead of permanently deleting data, records are marked with:

```
deleted_at
```

This allows:

* Data recovery
* Better data tracking

---

## 🧪 Health Check

```
GET /healthcheck
```

Response:

```json
{
  "message": "OK"
}
```

---

## 📬 Postman Collection

The Postman collection is included in the root directory of the project.

---

## 📌 Notes

* This project was developed as part of a backend training assignment.
* Focused on understanding relational database design and REST API structure.

---

## 👨‍💻 Author

Berkan Kabadayı
