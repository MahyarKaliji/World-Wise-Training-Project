# World Wise 🌍

World Wise is a React application that helps you track the cities and countries you have visited. Add new cities by clicking on the map, keep notes about your trips, and visualize your travels in an interactive and modern interface.

## Features

- 🌐 **Interactive Map:** Add cities by clicking on the map (powered by [Leaflet](https://leafletjs.com/)).
- 🗺️ **City & Country List:** View all cities and countries you have visited.
- 📝 **Trip Notes:** Add notes for each city you visit.
- 🔒 **Authentication:** Simple login system for user access.
- ⚡ **Modern UI:** Built with React, React Router, and CSS Modules.
- 💾 **Persistent Data:** Uses [json-server](https://github.com/typicode/json-server) for local API and data storage.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/world-wise.git
   cd world-wise
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the local API server:
   ```sh
   npm run server
   ```
   This will run `json-server` at [http://localhost:8000](http://localhost:8000).

4. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

## Usage

- **Add a city:** Click on the map, fill in the details, and save.
- **View cities/countries:** Use the sidebar navigation to switch between your list of cities and countries.
- **Login:** Use the sample credentials (`jack@example.com` / `qwerty`) to log in.

## Project Structure

- `src/` — React components, pages, contexts, and hooks
- `data/cities.json` — Sample data for cities (used by json-server)
- `public/` — Static assets (images, icons)
- `App.jsx` — Main application routing and layout

## Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build
- `npm run server` — Start the local API server (json-server)
- `npm run lint` — Run ESLint

## License

This project is for educational purposes.