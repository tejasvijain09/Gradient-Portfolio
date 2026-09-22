# Forever — E-Commerce Web Application

Forever is a full-stack e-commerce web application built with the MERN stack. The project was developed during Tejasvi Jain's Full-Stack Developer Internship at MyVirtualTeams, with a focus on scalable application functionality, secure user access, RESTful backend services, and reliable MongoDB data management.

## Highlights

- Full-stack e-commerce experience built with the MERN stack
- Product listing and catalog management
- Shopping cart and order management workflows
- Secure user authentication with JWT
- RESTful APIs for application data operations
- MongoDB-backed data storage
- Responsive and user-focused shopping experience
- Modular client-server architecture

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **API Style:** RESTful APIs
- **Architecture:** Client-server application

## Core Functionality

### Product Management

The application supports product listings that allow users to browse available products and access the information needed to make purchasing decisions.

### Shopping Cart

Users can add products to a shopping cart, review selected items, and manage their cart before placing an order.

### Order Management

The order workflow connects cart activity with backend data operations so order records can be created, retrieved, and managed through the application.

### Authentication and Secure Access

JWT-based authentication helps protect user data and provides secure client-server communication for authenticated workflows.

### RESTful Backend Services

The backend uses Node.js and Express.js to handle client requests and business logic. RESTful APIs support data operations such as:

- Creating records
- Retrieving records
- Updating records
- Managing user and application data

### MongoDB Data Storage

MongoDB is used to store application data in a structured and efficient way, supporting reliable data retrieval and database communication across the application.

## Internship Context

**Role:** Full-Stack Developer Intern — MERN Stack, REST APIs, JWT  
**Organization:** MyVirtualTeams — IT Services Company  
**Duration:** June 2023 – July 2025

During the internship, the project work included:

- Contributing to the development of a scalable e-commerce web application
- Improving overall system functionality and user experience
- Implementing backend services with Node.js and Express.js
- Enabling efficient client request handling and database communication
- Designing and integrating user authentication mechanisms
- Developing and optimizing RESTful APIs for creation, retrieval, and update operations
- Managing data storage with MongoDB
- Improving application responsiveness and maintainability through clean implementation practices

## Application Flow

```text
User
  ↓
React.js Frontend
  ↓
JWT Authentication
  ↓
Express.js REST API
  ↓
Node.js Business Logic
  ↓
MongoDB Database
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- MongoDB, either locally or through a hosted provider

### Clone the Repository

```bash
git clone https://github.com/tejasvijain09/Forever-.git
cd Forever-
```

### Install Dependencies

```bash
npm install
```

If the repository contains separate frontend and backend directories, install dependencies in each directory as defined by the project structure.

### Configure Environment Variables

Create a `.env` file using the variable names expected by the application. Typical configuration values may include:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Never commit real database credentials, JWT secrets, or other private values to the repository.

### Run the Application

Use the scripts defined in `package.json`:

```bash
npm run dev
```

For production builds, use the repository's configured build and start scripts.

## API Design

The backend follows RESTful conventions and separates responsibilities between:

- Route and request handling
- Authentication and authorization
- Business logic
- MongoDB data access
- Client-facing response handling

The exact endpoint paths and request payloads are defined in the repository's Express route files.

## Live Project

- **Live Demo:** [foreverbuy.in](https://foreverbuy.in/)
- **Source Code:** [github.com/tejasvijain09/Forever-](https://github.com/tejasvijain09/Forever-)

## Future Improvements

- Add product search, filtering, and sorting
- Add payment gateway integration
- Add admin inventory management
- Add order status notifications
- Add automated API and component tests
- Add deployment documentation and CI/CD

## Author

**Tejasvi Jain**

- GitHub: [@tejasvijain09](https://github.com/tejasvijain09)
- LinkedIn: [tejasvi-2005y](https://linkedin.com/in/tejasvi-2005y/)
