# Docker Setup for Stock Trend Application

This document provides instructions for building and running the Stock Trend React application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Files Created

1. **Dockerfile** - Multi-stage build configuration for the React app
2. **.dockerignore** - Excludes unnecessary files from the Docker build context
3. **docker-compose.yml** - Orchestration file for easier deployment

## Building and Running with Docker

### Option 1: Using Docker Commands

1. Build the Docker image:
```bash
docker build -t stock-trend-app .
```

2. Run the container:
```bash
docker run -d -p 3000:80 --name stock-trend-app stock-trend-app
```

3. Access the application at `http://localhost:3000`

### Option 2: Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up -d
```

2. To rebuild after changes:
```bash
docker-compose up -d --build
```

3. To stop the container:
```bash
docker-compose down
```

## Docker Configuration Details

### Dockerfile
- **Stage 1 (Builder)**: Uses Node.js 16 Alpine image to build the React app
  - Installs dependencies using npm
  - Builds the production-ready static files
- **Stage 2 (Production)**: Uses Nginx Alpine image to serve the app
  - Copies built files from the builder stage
  - Configures Nginx for React Router support
  - Enables caching for static assets
  - Exposes port 80

### Key Features
- Multi-stage build for smaller final image size
- Alpine Linux base for minimal footprint
- Nginx configuration supports client-side routing
- Static asset caching for better performance
- Health check configured in docker-compose.yml

## Environment Variables

If your application uses environment variables, you can:

1. Create a `.env` file in the project root
2. Modify the Dockerfile to copy and use the .env file during build:
```dockerfile
# Add before the build command in Stage 1
COPY .env* ./
```

3. Or pass environment variables at runtime:
```bash
docker run -d -p 3000:80 -e REACT_APP_API_URL=http://api.example.com stock-trend-app
```

## Troubleshooting

1. **Port already in use**: Change the port mapping in docker-compose.yml or docker run command
2. **Build fails**: Ensure all dependencies are properly listed in package.json
3. **Application not loading**: Check Docker logs: `docker logs stock-trend-app`

## Production Considerations

1. Use a reverse proxy (like Traefik or nginx-proxy) for SSL/TLS
2. Consider using a CDN for static assets
3. Implement proper logging and monitoring
4. Use Docker secrets for sensitive configuration
5. Set up automated builds with CI/CD pipelines