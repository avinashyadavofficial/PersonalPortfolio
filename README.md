
# Avinash Yadav - Portfolio Website

A modern, dynamic personal portfolio website built with:

## Frontend
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query for data fetching

## Backend
- Spring Boot
- JPA/Hibernate
- H2 Database (for development)

## Features
- Dynamic content loading from backend API
- Responsive design for all screen sizes
- Light/dark theme toggle
- Interactive animations and transitions
- Contact form with backend integration

## Project Structure
- `frontend/`: React application
- `backend/`: Spring Boot application
  - `src/main/java/com/avinash/portfolio/`: Java source code
  - `src/main/resources/`: Application properties, static resources
  - `pom.xml`: Maven dependencies and project configuration

## Running the Application

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend (React)
```bash
npm install
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api
- H2 Console: http://localhost:8080/api/h2-console (username: sa, password: password)

## Production Deployment
For production deployment, consider:
- Using a production-grade database like PostgreSQL
- Setting up proper CORS configurations
- Configuring a proper CI/CD pipeline
- Deploying frontend and backend to separate services

## License
[MIT](LICENSE)
