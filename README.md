# Roman Numeral Converter Project

## Overview

This project is a web-based solution that converts numbers (within the range 1 to 3999) into Roman numerals. It includes a **frontend** built with **React** and **Adobe's React Spectrum** and a **backend** API built with **Node.js/Express**. The solution is containerized using **Docker**, includes **Cypress** for E2E testing, and implements observability with **logs**, **metrics**, and **traces**.

---

## Technologies Used

- **Frontend**: React, TypeScript, React Spectrum
- **Backend**: Node.js, Express, TypeScript
- **Observability**: Prometheus, Grafana, Jaeger
- **Testing**: Cypress for E2E testing
- **Containerization**: Docker, Docker Compose

---

## Project Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- Docker
- Docker Compose
- Node.js (for local development)
- Cypress (for running tests)

### Clone the Repository

Clone the repository:

```bash
git clone https://github.com/saikiranp-code/roman-numeral-converter.git
cd roman-numeral-converter
```

### Run the Project with Docker Compose

To run the project with both the frontend and backend, use the following command:

```bash
docker-compose up --build
```

This will build and start the containers for the frontend, backend, and observability tools (Prometheus, Grafana, Jaeger).

### Run Frontend Locally (With Docker)

1. **Build the frontend Docker image**:

   ```bash
   docker build -t my-frontend .
   ```

2. **Run the frontend service**:

   ```bash
   docker run -p 3000:80 my-frontend
   ```

Access the frontend at [http://localhost:3000](http://localhost:3000).

### Run Backend Locally (With Docker)

1. **Build the backend Docker image**:

   ```bash
   docker build -t my-backend .
   ```

2. **Run the backend service**:

   ```bash
   docker run -p 8080:8080 my-backend
   ```

Access the backend at [http://localhost:8080](http://localhost:8080).

### Access Observability UIs

- **Jaeger (Traces)**: [http://localhost:16686](http://localhost:16686)
- **Prometheus (Metrics)**: [http://localhost:9090](http://localhost:9090)
- **Grafana (Logs)**: [http://localhost:3001](http://localhost:3001)

### Access Backend Metrics

You can access the backend metrics at:

```bash
http://localhost:8080/metrics
```

---

## Running Automated Tests

### Cypress E2E Tests

To run **Cypress tests** on a headless browser:

```bash
npx cypress run
```

To open the Cypress dashboard for interactive testing:

```bash
npx cypress open
```

Ensure your frontend and backend services are running before executing the tests.

---

## API Documentation

### Roman Numeral Conversion API

- **URL**: `/romannumeral?query={integer}`
- **Method**: `GET`
- **Query Parameters**:
  - `query` (required): A whole number between 1 and 3999.

#### Success Response (200 OK)

```json
{
  "input": "10",
  "output": "X"
}
```

#### Error Response (400 Bad Request)

```json
{
  "error": "Invalid input. Please enter a number between 1 and 3999."
}
```

---

## Project Structure

Here is the project structure:

```
.
├── backend/                 # Backend API
│   ├── src/                 # Source code for backend
│   ├── Dockerfile           # Dockerfile for backend service
│   └── package.json         # Backend dependencies
├── frontend/                # React frontend
│   ├── src/                 # React source code
│   ├── Dockerfile           # Dockerfile for frontend service
│   ├── package.json         # Frontend dependencies
│   ├── cypress/             # Cypress tests
│        ├── e2e/            # E2E tests
│        └── support/        # Cypress support files
├── docker-compose.yml       # Docker Compose configuration
├── README.md                # Project documentation
```

---

## Observability

### Logging:
- Logs for backend services are captured and displayed via **Grafana** or `run docker-compose logs -f` backend and `docker-compose logs -f`.

### Metrics:
- Prometheus collects and exposes application metrics via the `/metrics` endpoint on the backend.

### Traces:
- The project uses **Jaeger** for distributed tracing between frontend and backend services.

---

## Error Handling

### Frontend:
- The input field validates that the user enters a valid number between 1 and 3999.
- An error message is displayed if the input is invalid.

### Backend:
- The backend validates the `query` parameter for a valid number between 1 and 3999.
- If the input is invalid, the backend responds with an appropriate error message.

---

### Run Frontend Locally (Without Docker)
- In the frontend directory run `npm i`.
- Once all the packages are installed run `npm start`.

Access the frontend at [http://localhost:3000](http://localhost:3000).

### Run Backend Locally (Without Docker)
- In the frontend directory run `npm i`.
- Once all the packages are installed run `npm start`.

Access the backend at [http://localhost:8080](http://localhost:8080).

---

Happy coding !!