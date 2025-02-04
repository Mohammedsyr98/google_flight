import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Pages/Home";
import SearchProvider from "./Context/SearchContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <Home />
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
