# API Documentation

Base URL: `http://localhost:8080/api/v1`

## 1. Authentication APIs

### 1.1 Register User
- **Method**: `POST`
- **Endpoint**: `/auth/register`
- **Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "strongPassword123"
}
```
- **Response (200 OK)**:
```json
{
  "message": "User registered successfully",
  "email": "jane@example.com"
}
```

### 1.2 Login User
- **Method**: `POST`
- **Endpoint**: `/auth/login`
- **Request Body**:
```json
{
  "email": "jane@example.com",
  "password": "strongPassword123"
}
```
- **Response (200 OK)**:
```json
{
  "token": "eyJhbGciOiJIUzUxMiJ9...",
  "type": "Bearer",
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "STUDENT"
}
```

---

## 2. Course APIs

### 2.1 Get All Courses
- **Method**: `GET`
- **Endpoint**: `/courses`
- **Headers**: Authorization: Bearer <token> (Optional for public view)
- **Response**:
```json
[
  {
    "id": 1,
    "title": "Beginner Price Action Strategy",
    "description": "Learn the basics of price action.",
    "price": 49.99,
    "instructor": "Trading Guru",
    "thumbnail": "https://link-to-img.com/img.png"
  }
]
```

### 2.2 Get Course Details & Lessons (Student Enrolled / Admin)
- **Method**: `GET`
- **Endpoint**: `/courses/{courseId}/details`
- **Headers**: Authorization: Bearer <token>
- **Response**:
```json
{
  "id": 1,
  "title": "Beginner Price Action Strategy",
  "lessons": [
    {
      "id": 101,
      "title": "Introduction to Candlesticks",
      "videoUrl": "https://vimeo.com/xyz123"
    }
  ]
}
```

---

## 3. Trading Signals APIs

### 3.1 Get Active Signals
- **Method**: `GET`
- **Endpoint**: `/signals`
- **Headers**: Authorization: Bearer <token>
- **Response**:
```json
[
  {
    "id": 5,
    "stockName": "AAPL",
    "entryPrice": 150.50,
    "stopLoss": 145.00,
    "target": 165.00,
    "status": "ACTIVE",
    "date": "2026-03-12T10:00:00Z"
  }
]
```

### 3.2 Create Signal (Admin Only)
- **Method**: `POST`
- **Endpoint**: `/signals`
- **Headers**: Authorization: Bearer <token>
- **Request Body**:
```json
{
  "stockName": "TSLA",
  "entryPrice": 200.00,
  "stopLoss": 190.00,
  "target": 220.00
}
```
- **Response**: Returns created signal entity with `status = ACTIVE`.

---

## 4. Payment & Enrollment APIs

### 4.1 Purchase Course (Initiate)
- **Method**: `POST`
- **Endpoint**: `/payments/initiate`
- **Headers**: Authorization: Bearer <token>
- **Request Body**:
```json
{
  "courseId": 1
}
```
- **Response**:
```json
{
  "orderId": "order_HhgGxz12P",
  "amount": 4999, 
  "currency": "USD"
}
```

### 4.2 Verify & Enroll
- **Method**: `POST`
- **Endpoint**: `/payments/verify`
- **Request Body**:
```json
{
  "transactionId": "pay_xyz987",
  "orderId": "order_HhgGxz12P",
  "signature": "razorpay_signature_hash"
}
```
- **Response (200 OK)**:
```json
{
  "message": "Payment successful and enrolled to course."
}
```
