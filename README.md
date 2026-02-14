## AltSchool Exam Project - Todo App

A React + Vite todo application that supports CRUD, search, filtering, pagination, and detailed views. It uses React Router for navigation and React Query for data fetching and caching.

### Features

- Create, edit, and delete todos
- Search by title and filter by status
- Client-side pagination
- Todo detail page with metadata
- Error boundary demo page and 404 handling

### Tech Stack

- React 19
- Vite
- React Router
- TanStack React Query
- ESLint

### Project Structure

- App source lives in the Todo-app folder
- Pages and components are under Todo-app/src
- API access is in Todo-app/src/services/api.js

### Routes

- / - Home (todo list)
- /todos/:id - Todo detail
- /error-test - Error boundary test
- - - Not found

### API

The app uses a hosted API at https://api.oluwasetemi.dev for todos. The service wrapper lives in Todo-app/src/services/api.js.

### Getting Started

1. Open a terminal in the project root
2. Install dependencies

```bash
cd Todo-app
npm install
```

3. Start the dev server

```bash
npm run dev
```

### Scripts

From the Todo-app directory:

- npm run dev - Start Vite dev server
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint

### Notes

- Todos are fetched and cached with React Query.
- Filtering and pagination are client-side based on the fetched list.
