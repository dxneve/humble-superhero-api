# Superheroes App

## Overview

The Superheroes App is a full-stack web application built with NestJS for the backend and React for the frontend. It allows users to create and list superheroes, storing them in an in-memory repository.

## Technologies Used

- Backend: NestJS (Fastify adapter), TypeScript

- Frontend: React, TypeScript, Axios

## Features

Create new superheroes with a name, superpower, and humility score.

List superheroes, sorted by humility in descending order.

Simple in-memory storage for superheroes.

Basic validation for superhero data

## Installation & Setup

### Backend Setup

1. Clone the repository.

2. Navigate to the backend directory:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Start the backend server:

```bash
npm run start:dev
```

The server will run on http://localhost:3000.

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies::

```bash
npm install
```

3. Create a .env file in the frontend directory and set the backend API URL:

```bash
REACT_APP_API_URL=http://localhost:3000/superheroes
```

4. Start the frontend app:

```bash
npm run dev
```

The frontend will be available on http://localhost:5173.

## API Endpoints

### Superheroes API

- GET /superheroes - Retrieve a list of superheroes.

- POST /superheroes - Create a new superhero.
  - Body:
  ```json
  {
    "name": "Superman",
    "superpower": "Flight",
    "humility": 10
  }
  ```

### Frontend Components

- SuperheroesForm: A form for adding superheroes.

- SuperheroesList: Displays a list of superheroes.

- useSuperheroes (hook): Fetches and manages superheroes data.

## Future Improvements

- Implement database storage (PostgreSQL, MongoDB, etc.)

- Add authentication and user management

- Improve UI/UX with better styling

# License

This project is licensed under the MIT License.
