Full-Stack DevOps Deployment Project
This project demonstrates a production-ready, three-tier architecture deployed on AWS EC2 using Docker and automated via GitHub Actions.

🏗 Architecture Overview
The system is designed with security and automation as top priorities:

Reverse Proxy (Nginx): Acts as the single entry point (Port 80), routing traffic to the frontend and backend while hiding internal ports from the public internet.

Frontend (React): A containerized SPA that communicates with the API via relative paths.

Backend (Node.js/Express): A RESTful API that handles business logic and database communication.

Database (PostgreSQL): A persistent data store using Docker Volumes to ensure data survives container restarts.

CI/CD (GitHub Actions): A fully automated pipeline that handles SSH authentication, code synchronization, and container orchestration on every push to main.

🛠 Tech Stack
Cloud: AWS (EC2, Security Groups)

Containerization: Docker, Docker Compose

CI/CD: GitHub Actions

Web Server: Nginx

Frontend: React

Backend: Node.js, Express

Database: PostgreSQL

🚀 Key DevOps Features Implemented
Environment Variable Management: Utilized build-time ARGS for React and runtime ENV for Node.js to maintain a portable codebase.

Automated Schema Initialization: The database automatically initializes its schema and seed data upon first launch using Docker entrypoint scripts.

Security Hardening: Minimized attack surface by closing non-essential ports (3000, 5000) and using Nginx as a gateway.

Infrastructure as Code (IaC) Readiness: Project structure includes Terraform configurations for repeatable infrastructure deployment.

🚦 How to Run Locally
Clone the repository.

Ensure Docker and Docker Compose are installed.

Run the following command:

Bash
docker-compose up --build
Access the app at http://localhost.
