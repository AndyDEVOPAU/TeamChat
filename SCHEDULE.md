# Team Chat Backend — Development Schedule

This schedule is designed to build the project progressively.

The priority is **understanding the backend**, not rushing to finish features.

---

# 🗓️ Phase 1 — Project Setup

## Day 1 — Project Initialization

### Tasks

* [ ] Create GitHub repository
* [ ] Initialize Node.js
* [ ] Configure ES Modules
* [ ] Install Express
* [ ] Create `.gitignore`
* [ ] Create `.env`
* [ ] Create `.env.example`
* [ ] Create basic server
* [ ] Create first API endpoint

### Goal

Have a working Node.js + Express server.

```text
GET /api/health

Response:
{
  "success": true,
  "message": "Server is running"
}
```

---

## Day 2 — Project Architecture

### Tasks

* [ ] Create `src/`
* [ ] Create config folder
* [ ] Create controllers
* [ ] Create middleware
* [ ] Create models
* [ ] Create routes
* [ ] Create services
* [ ] Create utils
* [ ] Separate `app.js` and `server.js`

### Goal

Create the reusable backend structure.

---

## Day 3 — MongoDB

### Tasks

* [ ] Install Mongoose
* [ ] Create MongoDB connection
* [ ] Configure environment variables
* [ ] Connect application to MongoDB
* [ ] Test database connection
* [ ] Handle connection errors

### Goal

Node.js successfully connects to MongoDB.

---

# 🗓️ Phase 2 — Authentication

## Day 4 — User Model

### Tasks

* [ ] Create User model
* [ ] Define username
* [ ] Define email
* [ ] Define password
* [ ] Define avatar
* [ ] Define timestamps
* [ ] Add validation

---

## Day 5 — Password Security

### Tasks

* [ ] Install bcrypt
* [ ] Hash passwords
* [ ] Compare passwords
* [ ] Create password utility
* [ ] Test password hashing

---

## Day 6 — Register

### Tasks

* [ ] Create auth controller
* [ ] Create register route
* [ ] Validate request
* [ ] Check existing email
* [ ] Hash password
* [ ] Create user
* [ ] Return response

### Endpoint

```text
POST /api/auth/register
```

---

## Day 7 — Login + JWT

### Tasks

* [ ] Install JWT package
* [ ] Create JWT utility
* [ ] Create login controller
* [ ] Generate access token
* [ ] Validate credentials
* [ ] Return authentication response

### Endpoint

```text
POST /api/auth/login
```

---

## Day 8 — Authentication Middleware

### Tasks

* [ ] Create auth middleware
* [ ] Read Authorization header
* [ ] Verify JWT
* [ ] Attach user to request
* [ ] Protect routes
* [ ] Test protected endpoint

---

## Day 9 — Refresh Tokens

### Tasks

* [ ] Understand access vs refresh tokens
* [ ] Create refresh token
* [ ] Store refresh token securely
* [ ] Refresh access token
* [ ] Implement logout

### Endpoints

```text
POST /api/auth/refresh
POST /api/auth/logout
```

---

## Day 10 — Authentication Review

### Tasks

* [ ] Test register
* [ ] Test login
* [ ] Test invalid password
* [ ] Test invalid JWT
* [ ] Test expired JWT
* [ ] Test refresh token
* [ ] Test logout
* [ ] Clean up authentication code

### Goal

Complete authentication system.

---

# 🗓️ Phase 3 — Users & Teams

## Day 11 — User API

* [ ] Get current user
* [ ] Update profile
* [ ] Change password
* [ ] User search

---

## Day 12 — Team Model

* [ ] Create Team model
* [ ] Team name
* [ ] Team description
* [ ] Owner
* [ ] Members
* [ ] Roles

---

## Day 13 — Team CRUD

* [ ] Create team
* [ ] Get team
* [ ] Update team
* [ ] Delete team

---

## Day 14 — Team Members

* [ ] Invite members
* [ ] Accept invitation
* [ ] Remove member
* [ ] Leave team
* [ ] List members

---

## Day 15 — Team Roles

Implement:

```text
Owner
Admin
Member
```

Tasks:

* [ ] Role middleware
* [ ] Owner permissions
* [ ] Admin permissions
* [ ] Member permissions

---

# 🗓️ Phase 4 — Channels

## Day 16 — Channel Model

* [ ] Create Channel model
* [ ] Public/private channel
* [ ] Team relationship
* [ ] Members
* [ ] Creator

---

## Day 17 — Channel CRUD

* [ ] Create channel
* [ ] Get channels
* [ ] Update channel
* [ ] Delete channel

---

## Day 18 — Channel Permissions

* [ ] Private channels
* [ ] Add members
* [ ] Remove members
* [ ] Permission checks

---

# 🗓️ Phase 5 — Messaging

## Day 19 — Message Model

Create:

```text
Message
├── sender
├── channel
├── content
├── attachments
├── reactions
├── replyTo
└── timestamps
```

---

## Day 20 — Send Messages

* [ ] Create message API
* [ ] Validate message
* [ ] Save message
* [ ] Verify channel membership

### Endpoint

```text
POST /api/channels/:channelId/messages
```

---

## Day 21 — Get Messages

* [ ] Get channel messages
* [ ] Pagination
* [ ] Sorting
* [ ] Populate sender

---

## Day 22 — Edit & Delete

* [ ] Edit message
* [ ] Delete message
* [ ] Verify message owner
* [ ] Admin permissions

---

## Day 23 — Advanced Messages

* [ ] Replies
* [ ] Reactions
* [ ] Mentions
* [ ] Message search

---

# 🗓️ Phase 6 — Real-Time Chat

## Day 24 — Socket.IO Setup

* [ ] Install Socket.IO
* [ ] Configure Socket.IO server
* [ ] Connect client
* [ ] Understand socket lifecycle

---

## Day 25 — Real-Time Messages

Implement:

```text
message:new
```

Flow:

```text
Client
  ↓
Socket.IO
  ↓
Validate
  ↓
MongoDB
  ↓
Emit message
  ↓
Channel members
```

---

## Day 26 — Typing Indicator

Implement:

```text
user:typing
user:stoppedTyping
```

---

## Day 27 — Online Status

Implement:

```text
user:online
user:offline
```

---

# 🗓️ Phase 7 — Redis

## Day 28 — Redis Setup

* [ ] Install Redis
* [ ] Run Redis with Docker
* [ ] Connect Node.js to Redis
* [ ] Test Redis commands

---

## Day 29 — Presence

Use Redis for:

```text
userId → online
userId → offline
```

---

## Day 30 — Caching

Experiment with caching:

```text
Teams
Channels
User presence
Frequently requested data
```

---

# 🗓️ Phase 8 — Notifications

## Day 31 — Notification Model

Create:

```text
Notification
├── recipient
├── type
├── message
├── read
└── timestamps
```

---

## Day 32 — Notifications API

* [ ] Create notification
* [ ] Get notifications
* [ ] Mark as read
* [ ] Delete notification

---

## Day 33 — Real-Time Notifications

Implement:

```text
notification:new
```

Examples:

```text
You were mentioned.

You were invited to a team.

You were added to a channel.
```

---

# 🗓️ Phase 9 — File Uploads

## Day 34 — Upload System

* [ ] Install Multer
* [ ] Upload files
* [ ] Validate file type
* [ ] Validate file size

---

## Day 35 — Cloud Storage

Choose one:

```text
Cloudinary
AWS S3
```

Tasks:

* [ ] Upload file
* [ ] Save URL
* [ ] Save metadata
* [ ] Delete file

---

# 🗓️ Phase 10 — Docker

## Day 36 — Docker Node App

* [ ] Create Dockerfile
* [ ] Build image
* [ ] Run Node application

---

## Day 37 — Docker Compose

Create:

```text
docker-compose.yml

services:
  api
  mongodb
  redis
```

---

## Day 38 — Development Environment

Test:

```bash
docker compose up
```

Verify:

```text
Node.js → MongoDB
Node.js → Redis
Socket.IO → Node.js
```

---

# 🗓️ Phase 11 — Testing

## Day 39 — API Testing

Test:

```text
Register
Login
Logout
Teams
Channels
Messages
Notifications
```

---

## Day 40 — Authentication Testing

Test:

```text
Invalid password
Invalid token
Expired token
Unauthorized request
Forbidden request
```

---

## Day 41 — Socket Testing

Test:

```text
Connect
Disconnect
Send message
Receive message
Typing
Online status
Notifications
```

---

# 🗓️ Phase 12 — Cleanup & Documentation

## Day 42 — Error Handling

* [ ] Centralized errors
* [ ] Consistent API responses
* [ ] HTTP status codes
* [ ] Validation errors
* [ ] Logging

---

## Day 43 — API Documentation

Document:

```text
Authentication
Users
Teams
Channels
Messages
Notifications
```

---

## Day 44 — Code Cleanup

* [ ] Remove duplicated code
* [ ] Improve naming
* [ ] Review architecture
* [ ] Review security
* [ ] Review environment variables
* [ ] Update README

---

# 🏁 Final Phase — Portfolio Ready

## Day 45 — Final Review

Check:

```text
✓ Authentication
✓ Authorization
✓ Teams
✓ Channels
✓ Messages
✓ Socket.IO
✓ Redis
✓ Notifications
✓ File uploads
✓ Docker
✓ Error handling
✓ Documentation
```

---

## Day 46 — Git Cleanup

Review Git history.

Use meaningful commits:

```text
feat: add authentication
feat: add team management
feat: add channels
feat: add messaging
feat: add socket communication
feat: add redis presence
feat: add notifications
feat: add file uploads
feat: add docker setup
docs: update api documentation
```

---

## Day 47 — GitHub

* [ ] Push final code
* [ ] Update README
* [ ] Add project screenshots
* [ ] Add architecture diagram
* [ ] Add API documentation
* [ ] Add environment setup instructions

---

# 🎯 Final Project

At the end of the schedule:

```text
                    Team Chat
                       │
          ┌────────────┴────────────┐
          │                         │
       REST API                 WebSocket
          │                         │
          ▼                         ▼
       Express                  Socket.IO
          │                         │
          ├─────────────┬───────────┤
          │             │
       MongoDB        Redis
          │             │
          └──────┬──────┘
                 │
               Docker
```

The finished project should demonstrate the ability to build a **real-world backend system**, rather than only a basic CRUD application.

---

# 📊 Progress

Update this section as the project progresses.

```text
Phase 1   ⬜ Project Setup
Phase 2   ⬜ Authentication
Phase 3   ⬜ Users & Teams
Phase 4   ⬜ Channels
Phase 5   ⬜ Messaging
Phase 6   ⬜ Real-Time Chat
Phase 7   ⬜ Redis
Phase 8   ⬜ Notifications
Phase 9   ⬜ File Uploads
Phase 10  ⬜ Docker
Phase 11  ⬜ Testing
Phase 12  ⬜ Documentation
Final     ⬜ Portfolio Ready
```

---

# 📝 Notes

This schedule is flexible.

If a topic is difficult, spend additional time learning it before moving forward.

The objective is:

> **Understand what you build, not just make it work.**
