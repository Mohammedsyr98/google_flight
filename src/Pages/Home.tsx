import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useSearch } from "../Context/SearchContext";

import CheapFlights from "../Components/CheapFlights/CheapFlights";
import BestDeals from "../Components/BestDeals/BestDeals";
import PopularDestinations from "../Components/PopularDestinations/PopularDestinations";
import QuestionList from "../Components/Questions/QuestionList";
import FlightResultList from "../Components/FlightResult/FlightResultList";

export default function Home() {
  const { flightsDetails, isLoading } = useSearch();

  const [visibleCount, setVisibleCount] = useState(5); // Initially show 5 results
  const sectionStyle = { mt: 6, width: "100%" };
  // Function to show more results
  const showMoreResults = () => {
    setVisibleCount((prev) => prev + 5); // Load 5 more results
  };
  return (
    <Box>
      <Box>
        <img src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg" />
      </Box>

      <Stack alignItems={"center"}>
        <Typography textAlign={"center"} variant="h1" fontSize={70}>
          Flights
        </Typography>
        <SearchBar />

        {isLoading ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "50px" }}>
            <CircularProgress />
          </Box>
        ) : (
          flightsDetails && (
            <FlightResultList
              flightsDetails={flightsDetails}
              visibleCount={visibleCount}
              showMoreResults={showMoreResults}
            />
          )
        )}

        <Box sx={sectionStyle}>
          <CheapFlights />
        </Box>
        <Box sx={sectionStyle}>
          <BestDeals />
        </Box>
        <Box sx={sectionStyle}>
          <PopularDestinations />
        </Box>
        <Box sx={sectionStyle}>
          <QuestionList />
        </Box>
      </Stack>
    </Box>
  );
}
