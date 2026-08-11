# Trading Education Platform

A full-stack modern trading learning platform where students can take courses, view live market analysis, get trading signals, and read blogs.

## Tech Stack
- **Frontend**: React.js / Vite / Tailwind CSS / React Router Dom / Axios
- **Backend**: Java 17 / Spring Boot 3.x / Spring Security (JWT) / Spring Data JPA
- **Database**: MySQL 8+
- **Payment Gateway**: Razorpay (or Stripe)

## Setup Instructions

### 1. Database Setup
1. Ensure MySQL is running on your machine.
2. Login to MySQL and run the commands in `database_schema.sql` to generate the database schema and all necessary tables.
```bash
mysql -u root -p < database_schema.sql
```

### 2. Backend Setup (Spring Boot)
1. Open the `backend` folder in IntelliJ IDEA or STS.
2. Configure your database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/trading_edu
spring.datasource.username=root
spring.datasource.password=your_password

# JWT Secret
app.jwtSecret=YOUR_VERY_LONG_SECRET_KEY_HERE
app.jwtExpirationMs=86400000
```
3. Build and Run the project:
```bash
mvn clean install
mvn spring-boot:run
```
The backend Server should run on `http://localhost:8080`.

### 3. Frontend Setup (React)
1. Open up a terminal and navigate to the `frontend` folder.
2. Install dependencies:
```bash
npm install
```
3. Set your environment variables in `.env` (create if doesn't exist):
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```
4. Start the development server:
```bash
npm run dev
```
The Frontend UI should be available at `http://localhost:5173`.

---

## Features Matrix

### Student Role
- View Courses & Curriculum
- Read Trading Blogs
- Secure authentication via JWT
- Enrolled courses dashboard
- Receive Trading Signals
- Read daily live market analysis

### Admin Role
- Dashboard access
- Comprehensive CRUD for Courses and Lessons
- Add Trading signals (Active/Completed)
- Post Market analysis logs & Blog posts
- View registered users and completed payments

### Extra Features
- Complete custom User Authentication.
- Mobile responsive via Tailwind utility classes.
- Razorpay integrated payment cycle.
