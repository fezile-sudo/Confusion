# Confusion — Modern African Dining

A full-stack restaurant website inspired by contemporary African cuisine, built with React and expanded into a complete application with an Express API, MongoDB database, Redux state management and React Router.

The project started as a **Coursera course project** and was subsequently developed and extended with a custom restaurant concept, MongoDB-backed data, REST API endpoints, comments, team members and a functional contact form.

---

## About the Project

**Confusion** is a fictional modern African restaurant inspired by the flavours, ingredients and food traditions of Southern Africa.

The website focuses on creating a modern restaurant experience while keeping the content and design connected to African food culture.

The original project was created as part of a **Coursera React course**. The application was then further developed beyond the original course implementation to introduce a custom visual design and a full backend/database architecture.

---

## Features

- Responsive restaurant website
- Modern African restaurant branding
- Home page with featured dishes
- Dynamic menu loaded from MongoDB
- Individual dish detail pages
- Dish categories:
  - Starters
  - Mains
  - Sides
  - Desserts
- Dish labels such as Popular, New and Signature
- Customer comments stored in MongoDB
- Restaurant team members loaded from MongoDB
- About / Our Story page
- Functional contact form
- Contact messages stored in MongoDB
- React Router navigation
- Redux state management
- Loading and error states
- REST API built with Express
- MongoDB database integration
- Database seed script for dishes and team members
- Responsive Bootstrap / Reactstrap interface

---

## Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- Reactstrap
- Bootstrap
- JavaScript
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

### Development

- Create React App
- npm
- Git

---

## Application Architecture

The application follows a client-server architecture:

```text
React Frontend
      │
      ├── React Router
      │
      ├── Redux
      │
      └── React Components
             │
             ▼
        Express REST API
             │
             ▼
          MongoDB

The frontend communicates with the Express API for restaurant data instead of relying entirely on static frontend data.

API
The Express server runs locally on port 5000.

Dishes
GET    /api/dishes
GET    /api/dishes/:id

Used to retrieve restaurant dishes and individual dish details.

Comments
GET    /api/comments/dish/:dishId
POST   /api/comments

Used to retrieve comments for a dish and submit new customer comments.

Team
GET    /api/team

Used to retrieve the restaurant team members.

Contact
GET    /api/contact
POST   /api/contact

Used to retrieve and submit contact messages.

Database
MongoDB is used as the application's persistent data store.

The main collections are:
dishes
teams
comments
contacts

The project includes a seed script that can populate the database with the restaurant's initial dishes and team members.

Project Structure

confusion/
│
├── public/
│
├── server/
│   ├── models/
│   │   ├── Comment.js
│   │   ├── Contact.js
│   │   ├── Dish.js
│   │   └── Team.js
│   │
│   ├── routes/
│   │   ├── commentRouter.js
│   │   ├── contactRouter.js
│   │   ├── dishRouter.js
│   │   └── teamRouter.js
│   │
│   ├── seed.js
│   └── server.js
│
├── src/
│   ├── components/
│   │   ├── AboutComponent.js
│   │   ├── ContactComponent.js
│   │   ├── DishdetailComponent.js
│   │   ├── FooterComponent.js
│   │   ├── HeaderComponent.js
│   │   ├── HomeComponent.js
│   │   ├── MainComponent.js
│   │   └── MenuComponent.js
│   │
│   ├── redux/
│   │   ├── ActionCreators.js
│   │   ├── ActionTypes.js
│   │   ├── comments.js
│   │   ├── configureStore.js
│   │   ├── dishes.js
│   │   └── leaders.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .env
├── package.json
└── README.md

Getting Started
Prerequisites
Make sure the following are installed:

Node.js

npm

MongoDB

Installation
Clone the repository and navigate into the project: 
git clone <your-repository-url>
cd confusion

Install the frontend and backend dependencies:
npm install

Environment Variables
Create a .env file in the project root.

Example: MONGODB_URI=mongodb://127.0.0.1:27017/confusion
PORT=5000

Do not commit your .env file to GitHub.

Seed the Database
The project includes a database seed script.

From the project root, run: node server/seed.js

The script connects to MongoDB, removes the existing dishes and team members, and inserts the initial restaurant data.

You should see output similar to:
Connected to MongoDB
Existing dishes and team members removed
12 dishes added successfully
4 team members added successfully
MongoDB connection closed

Running the Application
The backend and frontend run separately during development.

Start the Express server
From the project directory: npm run server-dev
The API will run on: http://localhost:5000

Start React
Open another terminal and run: npm start

The React application will run on the development port configured by the project.

Main Routes
The React application includes: 
/home
/menu
/menu/:dishId
/aboutus
/contactus
The application redirects unknown routes back to /home.

Redux
Redux is used to manage application-level data including:

Dishes

Comments

Team members

Redux Toolkit is used to configure the application's Redux store.

The project originally used static Redux data as part of the course implementation. The application was subsequently developed to retrieve the primary restaurant data from the Express/MongoDB backend.

Contact Form
The Contact page includes a functional form with:

First name

Last name

Email

Phone

Preferred contact method

Message

Contact permission

Submitted messages are sent to the Express API and stored in MongoDB.

The form also provides:

Submission/loading state

Validation

Success feedback

Error feedback

Form reset after successful submission

Comments
Users can submit comments on individual dishes.

The comment flow is:
Dish Detail
     │
     ▼
Comment Form
     │
     ▼
POST /api/comments
     │
     ▼
MongoDB
     │
     ▼
Comments displayed on dish

Learning Background
This project began as part of a Coursera React course, which provided the foundation for learning and implementing React concepts.

The application was subsequently expanded and customised to demonstrate additional full-stack development skills, including:

REST API development

Express

MongoDB

Mongoose

Backend routing

Database models

API integration

Redux Toolkit

React Router

Form handling

Client-server communication

The final application therefore goes beyond the original course implementation and represents a customised full-stack restaurant project.

Project Status
Completed

The application is currently configured for local development.

Deployment to a hosted frontend, backend and MongoDB environment can be added separately when the project is published online.

Acknowledgement
This project was originally developed as part of a Coursera React course.

The original course provided the starting point and learning foundation for the application. The restaurant concept, visual design, content, backend implementation, MongoDB integration and subsequent feature development were customised and extended as part of the project's continued development.

License
This project was created for educational and portfolio purposes.

