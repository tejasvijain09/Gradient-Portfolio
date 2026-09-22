# Car Rental System

A backend-driven car rental management system built with Java and Spring Boot. The application is designed to manage vehicle listings, track availability, process rental bookings, and maintain customer records through RESTful services and a MySQL database.

## Features

- Manage vehicle listings and rental availability
- Create and manage customer records
- Handle rental bookings and booking status
- Expose RESTful services for client requests
- Persist application data with JDBC and MySQL
- Apply transaction management for reliable data operations
- Use modular, object-oriented design for maintainability and future growth

## Tech Stack

- **Language:** Java
- **Framework:** Spring Boot
- **Database Access:** JDBC
- **Database:** MySQL
- **Architecture:** REST API
- **Design Approach:** Object-oriented and modular design

## Core Modules

### Vehicle Management

Maintains vehicle listings and supports availability tracking so that vehicles can be shown as available or unavailable for new rentals.

### Customer Management

Stores and manages customer information required for rental bookings and customer record maintenance.

### Rental Booking

Supports the rental booking workflow and helps prevent unavailable vehicles from being booked.

### Data Persistence

Uses JDBC and MySQL for structured data storage, retrieval, updates, and transaction-aware operations.

## Project Structure

The project follows a layered Spring Boot structure:

```text
src/
└── main/
    ├── java/
    │   └── .../
    │       ├── controller/
    │       ├── service/
    │       ├── repository/
    │       ├── model/
    │       └── config/
    └── resources/
        └── application.properties
```

The exact package names may vary depending on the implementation.

## Getting Started

### Prerequisites

- Java 17 or newer
- MySQL 8 or newer
- Maven or Gradle, depending on the build configuration

### Clone the Repository

```bash
git clone https://github.com/tejasvijain09/car-rental-system.git
cd car-rental-system
```

### Create the Database

Create a MySQL database for the application:

```sql
CREATE DATABASE car_rental_system;
```

### Configure the Database Connection

Update the database properties in `src/main/resources/application.properties` or the equivalent configuration file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/car_rental_system
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

Do not commit real passwords or other credentials to the repository.

### Run the Application

Use the command that matches the build tool configured in the repository:

```bash
# Maven
./mvnw spring-boot:run

# Or Gradle
./gradlew bootRun
```

The application will start on the default Spring Boot port unless a different port is configured.

## API Workflow

The REST API is organized around the main business resources:

1. Add and view vehicle listings
2. Check vehicle availability
3. Register or update customer records
4. Create rental bookings
5. Update booking status and vehicle availability
6. Retrieve stored records from MySQL

The exact endpoint paths and request payloads are defined by the controller classes in the repository.

## Database Concepts

The system is centered around the following data areas:

- **Vehicles** — listing details, rental information, and availability
- **Customers** — customer identity and contact records
- **Bookings** — rental details, booking status, and vehicle/customer relationships

## Engineering Practices

- Encapsulated business logic in service layers
- Separated HTTP handling, business logic, and persistence concerns
- Used JDBC for explicit database operations
- Applied OOP principles to keep the code modular and extensible
- Used transaction-aware database operations for consistent updates

## Future Improvements

- Add authentication and role-based access
- Add an admin dashboard for fleet and booking management
- Add payment integration
- Add pickup and return date validation
- Add automated unit and integration tests
- Add API documentation with OpenAPI/Swagger
- Add deployment configuration for a cloud environment

## Author

**Tejasvi Jain**

- GitHub: [@tejasvijain09](https://github.com/tejasvijain09)
- LinkedIn: [tejasvi-2005y](https://linkedin.com/in/tejasvi-2005y/)
