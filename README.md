# Node.js Assignments

This repository contains Node.js backend assignments built using **Express.js**.
---

## 📁 Assignment 1 — Student REST API

A simple RESTful API built with **Node.js** and **Express.js** that performs CRUD-like operations on a list of student records stored in-memory.

render : https://serv-assign-1.onrender.com/students
postman : https://documenter.getpostman.com/view/50839270/2sBXcGDKLk

### 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Language:** JavaScript

### 📦 Installation

```bash
cd assignment_1
npm install
node index.js
```

Server will start on **http://localhost:3000**

### 🔗 API Endpoints

| Method | Endpoint                         | Description                                  |
|--------|----------------------------------|----------------------------------------------|
| GET    | `/`                              | Welcome route — returns author name          |
| GET    | `/students`                      | Returns the list of all students             |
| GET    | `/students/topper`               | Returns the student with the highest CGPA    |
| GET    | `/students/average`              | Returns the average CGPA of all students     |
| GET    | `/students/count`                | Returns the total number of students         |
| GET    | `/students/:id`                  | Returns a specific student by ID             |
| GET    | `/students/branch/:branchName`   | Returns all students of a specific branch    |

### 📄 Sample Student Data

Each student object has the following fields:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

**Branches included:** CSE, IT, ECE, AI, Data Science

### 📝 Example Responses

#### GET `/students/topper`
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

#### GET `/students/average`
```json
{
  "averageCGPA": 8.51
}
```

#### GET `/students/count`
```json
{
  "totalstudents": 10
}
```

#### GET `/students/branch/CSE`
```json
[
  { "id": 1, "name": "Aarav Sharma", "branch": "CSE", "semester": 8, "cgpa": 9.3 },
  { "id": 4, "name": "Meera Iyer", "branch": "CSE", "semester": 8, "cgpa": 9.1 },
  { "id": 6, "name": "Ananya Reddy", "branch": "CSE", "semester": 6, "cgpa": 8.7 },
  { "id": 10, "name": "Neha Gupta", "branch": "CSE", "semester": 6, "cgpa": 7.9 }
]
```

### ✨ Features

- Retrieve all student records
- Find the topper (highest CGPA)
- Calculate the average CGPA
- Get total student count
- Search students by ID
- Filter students by branch name (case-insensitive)

---

## 👤 Author

**Vedant**

## 📜 License

ISC
