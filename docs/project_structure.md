# Trading Education Platform - Project Structure

## Frontend Structure (React + Vite + Tailwind)
```
frontend/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/             # Global CSS, styling utilities
│   │   └── index.css       # Tailwind entry point
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── VideoPlayer.jsx
│   │   └── PrivateRoute.jsx# Auth wrapper component
│   ├── context/            # Global state (React Context API)
│   │   └── AuthContext.jsx
│   ├── hooks/              # Custom hooks (e.g., useAuth)
│   ├── pages/              # Route components (Views)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── LiveAnalysis.jsx
│   │   ├── TradingSignals.jsx
│   │   └── Contact.jsx
│   ├── services/           # Axios API call logic
│   │   ├── api.js          # Axios instance with interceptors
│   │   ├── authService.js
│   │   ├── courseService.js
│   │   └── signalService.js
│   ├── App.jsx             # Main App layout & Routing
│   └── main.jsx            # React root injection
├── .env                    # Environment variables (API base URL)
├── tailwind.config.js      # Tailwind configurations
├── package.json            # Node dependencies
└── vite.config.js          # Vite config
```

## Backend Structure (Spring Boot)
```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/tradingedu/
│   │   │       ├── TradingPlatformApplication.java# Main Run class
│   │   │       ├── config/         # App Configs
│   │   │       │   └── SecurityConfig.java
│   │   │       ├── controller/     # REST Endpoints
│   │   │       │   ├── AuthController.java
│   │   │       │   ├── CourseController.java
│   │   │       │   └── TradingSignalController.java
│   │   │       ├── model/          # Entities
│   │   │       │   ├── User.java
│   │   │       │   ├── Course.java
│   │   │       │   └── TradingSignal.java
│   │   │       ├── dto/            # Data Transfer Objects
│   │   │       │   ├── request/    # Incoming requests
│   │   │       │   └── response/   # Outgoing responses
│   │   │       ├── repository/     # Spring Data JPA Interfaces
│   │   │       │   ├── UserRepository.java
│   │   │       │   └── CourseRepository.java
│   │   │       ├── security/       # JWT logic
│   │   │       │   ├── JwtUtils.java
│   │   │       │   └── JwtAuthFilter.java
│   │   │       ├── service/        # Business Logic Interfaces
│   │   │       └── service/impl/   # Business Logic Implementations
│   │   └── resources/
│   │       ├── application.properties # Server port, DB creds, JWT Secret
│   │       └── data.sql        # Initial static data (Optional)
├── pom.xml                     # Maven dependencies
└── README.md                   # Backend specific readme
```
