import React from "react";
import FlightResultCard from "./FlightResultCard";
import { Box, Button } from "@mui/material";
import { FlightResultsListProps } from "../../Types/FlightDetailsType";

export default function FlightResultList({
  flightsDetails,
  visibleCount,
  showMoreResults,
}: FlightResultsListProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: "50px",
          border: "0.1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "3px",
        }}>
        {flightsDetails.itineraries
          .slice(0, visibleCount)
          .map((detail, index) => (
            <FlightResultCard key={index} flightData={detail} />
          ))}
      </Box>
      {flightsDetails.itineraries.length > visibleCount && (
        <Button onClick={showMoreResults} variant="contained" sx={{ mt: 3 }}>
          Show More
        </Button>
      )}
    </Box>
  );
}
