# Getting Started with Travel App

This project consists of a **Frontend** and a **Backend**. Below are the steps to get the application up and running.

## Clone the Project

To get started, clone the repository:

```
git clone https://github.com/Bharath-KumarReddy/travel_frontend.git
git clone https://github.com/Bharath-KumarReddy/travel_Backend.git
```

## Install Dependencies

### Frontend

1. Navigate to the frontend project directory:

```
cd travel_frontend
```

2. Install the required dependencies:

```
npm install
```

3. Start the frontend application:

```
npm run start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Backend

1. Navigate to the backend project directory:

```
cd travel_Backend
```

2. Install the required dependencies:

```
npm install
```

3. Start the backend server using **Nodemon**:

```
nodemon server.js
```

This will start the backend server.

## Environment Variables

Make sure to set up the following environment variables in a `.env` file:

```
DATABASE_URI=your-database-uri
PASSWORD_SECRET_KEY=your-password-secret-key
ACCESS_TOKEN=your-access-token-secret
REDIS_URL=your-redis-url
```
### Deployment
The Frontend Live Demo link: [Live Demo](https://breezetravel.vercel.app/)

# Git Repository  

The Frontend application Git repo and code can be accessed at the following link:  
[Git Repo](https://github.com/Bharath-KumarReddy/travel_frontend)  

The Backend application Git repo and code can be accessed at the following link:  
[Git Repo](https://github.com/Bharath-KumarReddy/travel_Backend)  

## Optimized Data Retrieval with Redis Caching  
Implemented **caching using Redis** to improve data retrieval efficiency, reducing database load and enhancing response times. Cached frequently accessed data, ensuring optimal performance for users while maintaining real-time updates.  

![image](https://github.com/user-attachments/assets/bab0df4e-19dd-4282-866c-2abc9d85d97b)  

![image](https://github.com/user-attachments/assets/c7960500-613e-4413-9c10-8a8373116f5e)  


