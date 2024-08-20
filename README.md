# Server for Momentum

# Project Title
	Momentum
	
## Overview
	Momentum is an all-in-one fitness app that integrates various aspects of health and 
	fitness management, catering to users' diverse needs.
	Momentum is a fitness solution that combines workouts, fitness tracking, and meal 
	planning into a single platform. By addressing the multifaceted nature of health and 
	fitness, the app seeks to empower users to achieve their personal fitness goals 
	effectively.


### Endpoints

**POST /auth/SignUp**

- Add a user account 

Parameters: 
- Name: user's name
- email: user's email
- password: user's chosen password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /auth/LogIn**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**GET /user/profile**

- Get User info

**PUT /user/profile**

- Update user info

**GET /Workouts/all**

- get all workouts

**GET /Workouts**

- get workouts by type and difficulty 

**POST /gemini/generate-content**

- post prompt parameter - data payload


