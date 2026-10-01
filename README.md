Confusion — Modern African Dining

A full-stack restaurant website inspired by contemporary African cuisine, built with React and expanded into a complete application with an Express REST API, MongoDB database, Redux state management and React Router.

The project started as a Coursera React course project and was subsequently developed and customised into a full-stack restaurant application with a custom restaurant concept, MongoDB-backed data, REST API endpoints, customer comments, team members and a functional contact form.

Live Application

Frontend:
https://confusion-restaurant-4n5i.onrender.com

Backend API:
https://confusion-api-69mr.onrender.com

Repository:
https://github.com/fezile-sudo/Confusion

The frontend and backend are deployed separately on Render, while MongoDB Atlas provides the production database.

About the Project

Confusion is a fictional modern African restaurant inspired by the flavours, ingredients and food traditions of Southern Africa.

The website combines a modern restaurant experience with content inspired by African food culture.

The original project was created as part of a Coursera React course. It was then substantially customised and extended with:

A custom restaurant identity and visual design

MongoDB-backed restaurant data

An Express REST API

Customer comments

A functional contact form

MongoDB persistence

Dynamic team member data

Production deployment

The final application demonstrates both frontend and backend development rather than being limited to the original course implementation.

Features

Responsive restaurant website

Modern African restaurant branding

Home page with featured dishes

Dynamic menu loaded from MongoDB

Individual dish detail pages

Dish categories:

Starters

Mains

Sides

Desserts

Dish labels such as Popular, New and Signature

Customer comments stored in MongoDB

Restaurant team members loaded from MongoDB

About / Our Story page

Functional contact form

Contact messages stored in MongoDB

React Router navigation

Redux state management

Loading and error states

REST API built with Express

MongoDB and Mongoose integration

Database seed script

Responsive Bootstrap / Reactstrap interface

Production frontend deployment

Production backend deployment

MongoDB Atlas production database

SPA rewrite support for direct React Router navigation

Tech Stack
Frontend

React

React Router

Redux Toolkit

Reactstrap

Bootstrap

JavaScript

CSS

Backend

Node.js

Express

MongoDB

Mongoose

CORS

dotenv

Development & Deployment

Create React App

npm

Git / GitHub

Render

MongoDB Atlas

Application Architecture

The application follows a client-server architecture:

                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │                         │
                    │  React Router           │
                    │  Redux                  │
                    │  React Components       │
                    └────────────┬────────────┘
                                 │
                                 │ HTTP Requests
                                 ▼
                    ┌─────────────────────────┐
                    │     Express REST API    │
                    │                         │
                    │  Dishes                 │
                    │  Comments               │
                    │  Team                   │
                    │  Contact                │
                    └────────────┬────────────┘
                                 │
                                 │ Mongoose
                                 ▼
                    ┌─────────────────────────┐
                    │      MongoDB Atlas      │
                    │                         │
                    │  dishes                 │
                    │  teams                  │
                    │  comments               │
                    │  contacts               │
                    └─────────────────────────┘


During development, the React frontend communicates with the local Express server at:

http://localhost:5000


In production, the frontend uses the deployed Render API:

https://confusion-api-69mr.onrender.com


The API base URL is centralised in:

src/config.js


This allows the application to use the local API during development and the production API when the React application is built for deployment.

REST API

The production API is available at:

https://confusion-api-69mr.onrender.com

Dishes
GET /api/dishes
GET /api/dishes/:id


Used to retrieve restaurant dishes and individual dish details.

Comments
GET  /api/comments/dish/:dishId
POST /api/comments


Used to retrieve comments for a specific dish and submit new customer comments.

Team
GET /api/team


Used to retrieve restaurant team members.

Contact
GET  /api/contact
POST /api/contact


Used to retrieve and submit contact messages.

Database

The application uses MongoDB Atlas as its production database.

The main collections are:

dishes
teams
comments
contacts


The project includes a seed script that can populate the database with the initial restaurant dishes and team members.

The seed script does not need to be run for every deployment. It is primarily used to initialise or reset the restaurant data.

Seed Data

The seed script currently creates:

12 dishes

4 team members

Run it from the project root with:

node server/seed.js


The script removes existing dishes and team members before inserting the initial seed data.

Example output:

Connected to MongoDB
Existing dishes and team members removed
12 dishes added successfully
4 team members added successfully
MongoDB connection closed


Customer comments and contact messages are stored separately and are not part of the dish/team seed reset.

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
│   ├── config.js
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


The .env file is intentionally excluded from Git and should not be committed because it contains environment-specific configuration and database credentials.

Getting Started
Prerequisites

Make sure the following are installed:

Node.js

npm

MongoDB or a MongoDB Atlas account

Git

Installation

Clone the repository:

git clone https://github.com/fezile-sudo/Confusion.git
cd Confusion


Install dependencies:

npm install


Because the project contains some older React dependencies alongside React 19, dependency installation may require:

npm install --legacy-peer-deps


The production Render frontend currently uses the same installation approach.

Environment Variables

Create a .env file in the project root for local development:

MONGODB_URI=mongodb://127.0.0.1:27017/confusion
PORT=5000


For MongoDB Atlas, the MONGODB_URI should contain the appropriate Atlas connection string.

Example:

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
PORT=5000


Never commit the .env file or expose the MongoDB password publicly.

Production environment variables are configured separately in Render.

Running the Application Locally

The backend and frontend run separately during development.

Start the Express API

From the project root:

npm run server-dev


The API runs on:

http://localhost:5000


You can test the dishes endpoint with:

http://localhost:5000/api/dishes

Start React

Open another terminal and run:

npm start


The React application will open using the Create React App development server.

Production Deployment

The application is deployed using separate Render services.

Backend

The Express API is deployed as a Render web service.

Production API:

https://confusion-api-69mr.onrender.com


The backend runs:

node server/server.js


Render supplies the production PORT value through its environment.

MongoDB Atlas is used as the production database.

Frontend

The React application is deployed as a Render Static Site.

Production frontend:

https://confusion-restaurant-4n5i.onrender.com


The production build uses:

npm install --legacy-peer-deps && npm run build


The generated React application is published from:

build

React Router Rewrite

Because this is a single-page React application, Render is configured with the following rewrite rule:

Source:      /*
Destination: /index.html
Action:      Rewrite


This allows routes such as:

/menu
/menu/:dishId
/aboutus
/contactus


to continue working when a user refreshes the page or directly opens a nested URL.

Without the rewrite, refreshing a React Router URL could result in a server-side 404.

Main Routes

The React application includes:

/home
/menu
/menu/:dishId
/aboutus
/contactus


Unknown routes are redirected back to the home page.

Redux

Redux is used to manage application-level data including:

Dishes

Comments

Team members

Redux Toolkit is used to configure the application's Redux store.

The project originally used static Redux data as part of the course implementation. The application was subsequently developed to retrieve primary restaurant data from the Express/MongoDB backend.

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

Validation

Submission/loading state

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


Existing comments are retrieved from:

GET /api/comments/dish/:dishId


New comments are submitted through:

POST /api/comments


Comments are stored in MongoDB and therefore persist independently of the frontend deployment.

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

Environment variables

Production deployment

MongoDB Atlas

Render

The final application therefore goes beyond the original course implementation and represents a customised full-stack restaurant project.

Project Status

Completed and deployed.

The application currently has:

A deployed React frontend

A deployed Express backend

A MongoDB Atlas production database

Dynamic restaurant data

Working dish detail pages

Working customer comments

Working contact form

Working React Router navigation

Production SPA rewrite configuration

Production URLs

Website:
https://confusion-restaurant-4n5i.onrender.com

API:
https://confusion-api-69mr.onrender.com

Acknowledgement

This project was originally developed as part of a Coursera React course.

The original course provided the starting point and learning foundation for the application. The restaurant concept, visual design, content, backend implementation, MongoDB integration, API architecture, deployment configuration and subsequent feature development were customised and extended as part of the project's continued development.

License

This project was created for educational and portfolio purposes.