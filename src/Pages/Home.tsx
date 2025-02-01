import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <Box>
      <Box>
        <img src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg" />
      </Box>

      {/* Flights */}
      <Stack alignItems={"center"}>
        <Typography textAlign={"center"} variant="h1" fontSize={70}>
          Flights
        </Typography>
        <SearchBar />
      </Stack>
    </Box>
  );
}
