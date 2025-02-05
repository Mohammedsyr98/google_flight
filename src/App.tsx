import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Pages/Home";
import SearchProvider from "./Context/SearchContext";
import FlightResult from "./Components/FlightResult/FlightResultCard";
import { Box } from "@mui/material";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              width={{
                xs: "90%",
                sm: "100%",
                md: "80%",
                lg: "75%",
              }}>
              <Home />
            </Box>
          </Box>
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
