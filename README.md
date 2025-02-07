# Google Flights Clone - React App

This project replicates a Google Flights-like feature, allowing users to search for flights, view results, and filter by various criteria such as destinations, dates, and price. It is built with **React**, **Material UI**, **Axios**, **React Query**, and the **Sky-Scrapper API** for fetching flight data.

## Features

- **Flight Search**: Users can search for flights by entering a departure location, destination, and dates.
- **Responsive Design**: The app is responsive and works seamlessly across various screen sizes.
- **API Integration**: Fetch flight data using the **Sky-Scrapper API** from RapidAPI.
- **Debounced Search**: Implements debouncing in the location input field to minimize API calls when typing.
- **TypeScript**: The project is built with TypeScript for better type safety and development experience.

## Technologies Used

- **React**: For building the user interface.
- **Material UI**: For pre-built UI components.
- **Axios**: For making API requests.
- **React Query**: For managing and caching API data.
- **Sky-Scrapper API**: For flight data.
- **TypeScript**: For type safety.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Mohammedsyr98/google_flight.git
   ```

2. Navigate to the project directory:

   ```bash
   cd google_flight
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your RapidAPI key:

   ```bash
   REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Visit `http://localhost:3000` in your browser to see the app in action.

## Project Structure

- `components/`: Contains reusable UI components like the search bar, flight results, and sliders.
- `pages/`: Includes main pages such as the home page.
- `context/`: Manages API calls using Axios and React Query in context file.
- `hooks/`: Contains custom hooks like `useDebounce` for debouncing the search input.
- `types/`: Stores TypeScript type definitions for various parts of the app.

## Loom Demo

You can view the demo video of the code here:https://www.loom.com/share/a9e6d64618f4426d95b2d201ae2b9a35?sid=02f98ef0-c800-45ec-8cdd-63ce8069a317

## Contributing

If you’d like to contribute to this project, feel free to fork the repository, make changes, and create a pull request.

