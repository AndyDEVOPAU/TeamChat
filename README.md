# Team Chat Backend

A full-stack team communication backend built with **Node.js, Express, MongoDB, Socket.IO, Redis, and JWT authentication**.

The goal of this project is to build a production-style backend for a team chat application while learning authentication, authorization, REST APIs, real-time communication, database design, caching, file uploads, and scalable backend architecture.

---

## 📌 Project Goals

The main goals of this project are:

* Build a reusable Node.js backend structure
* Practice clean backend architecture
* Implement secure authentication
* Build RESTful APIs
* Design relationships with MongoDB and Mongoose
* Implement real-time communication with Socket.IO
* Use Redis for real-time presence and caching
* Implement team and channel permissions
* Handle messages and conversations
* Implement notifications
* Support file uploads
* Learn Docker for backend development
* Write maintainable and scalable code
* Use Git and GitHub professionally

---

# 🚀 Features

## Authentication

* [ ] User registration
* [ ] User login
* [ ] Password hashing with bcrypt
* [ ] JWT authentication
* [ ] Access tokens
* [ ] Refresh tokens
* [ ] Logout
* [ ] Protected routes
* [ ] Authentication middleware

## Users

* [ ] Get current user
* [ ] Update profile
* [ ] Change password
* [ ] User avatar
* [ ] User search
* [ ] Online/offline status

## Teams

* [ ] Create team
* [ ] Update team
* [ ] Delete team
* [ ] Join team
* [ ] Leave team
* [ ] Invite members
* [ ] Remove members
* [ ] Team member list
* [ ] Team roles

### Team Roles

```text
Owner
Admin
Member
```

---

## Channels

* [ ] Create channel
* [ ] Update channel
* [ ] Delete channel
* [ ] Public channels
* [ ] Private channels
* [ ] Add members
* [ ] Remove members
* [ ] Channel permissions

Example:

```text
Team
│
├── # general
├── # development
├── # frontend
├── # backend
└── 🔒 management
```

---

# 💬 Messaging

* [ ] Send messages
* [ ] Get messages
* [ ] Edit messages
* [ ] Delete messages
* [ ] Message pagination
* [ ] Message replies
* [ ] Message reactions
* [ ] User mentions
* [ ] Message search

Example:

```text
John:
Can someone review the authentication API?

Sarah:
Sure, I'll check it.

John:
@Mike can you also test the endpoint?
```

---

# ⚡ Real-Time Communication

Socket.IO will be used for real-time communication.

### Events

```text
message:new
message:updated
message:deleted

user:online
user:offline

user:typing
user:stoppedTyping

notification:new
```

The goal is for users to receive messages immediately without refreshing the page.

---

# 🔔 Notifications

* [ ] New message notification
* [ ] Mention notification
* [ ] Team invitation notification
* [ ] Channel notification
* [ ] Read/unread notifications
* [ ] Real-time notifications

---

# 📎 File Uploads

* [ ] Upload images
* [ ] Upload documents
* [ ] Store file metadata
* [ ] Validate file types
* [ ] Validate file sizes
* [ ] Cloud storage integration

Possible storage:

```text
Cloudinary
AWS S3
```

---

# 🔎 Search

Eventually support:

* [ ] Search users
* [ ] Search teams
* [ ] Search channels
* [ ] Search messages
* [ ] Search by sender
* [ ] Search by date

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js
* JavaScript / ES Modules

## Database

* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## Real-Time

* Socket.IO

## Cache / Presence

* Redis

## Validation

* Zod

## File Upload

* Multer
* Cloudinary / AWS S3

## Development

* Docker
* Docker Compose
* Nodemon

## Version Control

* Git
* GitHub

---

# 📁 Project Structure

```text
team-chat-backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │   └── socket.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── team.controller.js
│   │   ├── channel.controller.js
│   │   ├── message.controller.js
│   │   └── notification.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── role.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Team.js
│   │   ├── Channel.js
│   │   ├── Message.js
│   │   └── Notification.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── team.routes.js
│   │   ├── channel.routes.js
│   │   ├── message.routes.js
│   │   └── notification.routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── team.service.js
│   │   ├── channel.service.js
│   │   ├── message.service.js
│   │   └── notification.service.js
│   │
│   ├── sockets/
│   │   ├── chat.socket.js
│   │   ├── presence.socket.js
│   │   └── notification.socket.js
│   │
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── hash.js
│   │   └── apiError.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
└── SCHEDULE.md
```

---

# 🏗️ Architecture

The backend will follow a layered architecture:

```text
Client
  │
  ├────────────── REST API
  │                    │
  │                    ▼
  │              Routes
  │                    │
  │                    ▼
  │              Middleware
  │                    │
  │                    ▼
  │             Controllers
  │                    │
  │                    ▼
  │               Services
  │                    │
  │                    ▼
  │                Models
  │                    │
  │                    ▼
  │                MongoDB
  │
  └──────────── WebSocket
                       │
                       ▼
                  Socket.IO
                       │
                 ┌─────┴─────┐
                 │           │
               Redis       MongoDB
```

---

# 🔐 Security Goals

The application should follow basic backend security practices.

* Passwords must never be stored as plain text
* Passwords will be hashed with bcrypt
* Protected routes require authentication
* JWT secrets must be stored in environment variables
* Validate request data
* Validate uploaded files
* Implement role-based authorization
* Do not expose sensitive user information
* Use proper HTTP status codes
* Centralized error handling
* Environment variables must not be committed

---

# 🐳 Docker

The development environment will eventually run:

```text
Docker
│
├── Node.js API
├── MongoDB
└── Redis
```

Docker Compose will be used to start the development environment.

Example:

```bash
docker compose up
```

---

# 🌿 Git Workflow

The project will use feature branches.

Example:

```text
main
│
├── develop
│
├── feature/auth
├── feature/teams
├── feature/channels
├── feature/messages
├── feature/socket
└── feature/notifications
```

Example workflow:

```bash
git checkout -b feature/auth

git add .

git commit -m "feat: add user authentication"

git push -u origin feature/auth
```

---

# 📋 Development Milestones

## Milestone 1 — Project Foundation

* [ ] Initialize Node.js project
* [ ] Configure ES Modules
* [ ] Install dependencies
* [ ] Create project structure
* [ ] Configure environment variables
* [ ] Configure Express
* [ ] Configure MongoDB
* [ ] Create error handling
* [ ] Create basic API response structure

## Milestone 2 — Authentication

* [ ] User model
* [ ] Register
* [ ] Login
* [ ] Password hashing
* [ ] JWT
* [ ] Auth middleware
* [ ] Refresh token
* [ ] Logout

## Milestone 3 — Teams

* [ ] Team model
* [ ] Create team
* [ ] Team members
* [ ] Invitations
* [ ] Team roles
* [ ] Team permissions

## Milestone 4 — Channels

* [ ] Channel model
* [ ] Create channel
* [ ] Public channels
* [ ] Private channels
* [ ] Channel members
* [ ] Channel permissions

## Milestone 5 — Messaging

* [ ] Message model
* [ ] Create message
* [ ] Get messages
* [ ] Pagination
* [ ] Edit message
* [ ] Delete message
* [ ] Replies
* [ ] Reactions

## Milestone 6 — Real-Time

* [ ] Socket.IO
* [ ] Real-time messages
* [ ] Typing indicator
* [ ] Online status
* [ ] Offline status
* [ ] Real-time notifications

## Milestone 7 — Redis

* [ ] Redis setup
* [ ] User presence
* [ ] Message caching
* [ ] Socket scaling preparation

## Milestone 8 — Files & Notifications

* [ ] File uploads
* [ ] Cloud storage
* [ ] Notification model
* [ ] Notification API
* [ ] Real-time notifications

## Milestone 9 — Docker

* [ ] Dockerfile
* [ ] Docker Compose
* [ ] Node container
* [ ] MongoDB container
* [ ] Redis container
* [ ] Environment configuration

## Milestone 10 — Testing & Documentation

* [ ] API testing
* [ ] Authentication testing
* [ ] Socket testing
* [ ] Error testing
* [ ] README documentation
* [ ] API documentation
* [ ] Deployment preparation

---

# 🎯 Final Goal

The final backend should provide the foundation for a team communication application similar to:

```text
Slack
Discord
Microsoft Teams
```

but built from scratch for learning and portfolio purposes.

The project should demonstrate:

```text
Authentication
Authorization
REST APIs
MongoDB
Real-time communication
WebSockets
Redis
Caching
File uploads
Docker
Git
Clean architecture
```

---

# 📚 Learning Goals

By completing this project, I should understand:

* How Node.js backends are structured
* How Express handles requests
* How authentication works
* How JWT works
* How password hashing works
* How MongoDB relationships work
* How REST APIs are designed
* How WebSockets work
* How Socket.IO works
* Why Redis is useful
* How real-time systems work
* How Docker works
* How to structure a larger backend
* How to build a backend suitable for a real application

---

# 📈 Future Improvements

Possible future features:

* Direct messages
* Group conversations
* Voice calls
* Video calls
* Message threads
* Advanced search
* Email notifications
* Push notifications
* Message read receipts
* User activity history
* Audit logs
* Rate limiting
* API versioning
* Automated tests
* CI/CD
* Production deployment

---

## Status

🚧 **In Development**

This project is being built step-by-step as a backend learning and portfolio project.
