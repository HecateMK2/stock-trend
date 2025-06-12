# Stock Trend Application

This is a React-based web application that allows users to analyze stock trends. It provides a simple interface to filter and view stock data, with color-coded indicators for positive and negative trends.

## Features

- **Stock Filtering**: Users can filter stocks by ticker symbol.
- **Trend Analysis**: The application displays the number of days a stock's opening price was higher or lower than the previous day's closing price.
- **Overnight Performance**: It calculates the percentage of days with a positive overnight trend.
- **Dockerized**: The application is fully containerized with Docker for easy deployment.

## Tech Stack

- **Frontend**: React, TypeScript, Bootstrap
- **Styling**: SCSS
- **API**: The application fetches data from a backend API.

## Getting Started

### Prerequisites

- Node.js and npm
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hue2/stock-trend.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project and add the following environment variable:
   ```
   REACT_APP_API_URL=http://your-api-url.com
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Docker Deployment

To build and run the application with Docker, use the following commands:

1. Build the Docker image:
   ```bash
   docker-compose build
   ```
2. Start the application:
   ```bash
   docker-compose up -d
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── api.js
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── StockFilter.tsx
│   │   └── StockTable.tsx
│   ├── context/
│   │   └── StockContext.tsx
│   ├── tests/
│   │   └── ...
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── index.js
├── .dockerignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
