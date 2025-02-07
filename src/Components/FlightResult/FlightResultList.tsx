import React, { useState } from "react";
import FlightResultCard from "./FlightResultCard";
import { Box, Button, MenuItem, Select } from "@mui/material";
import { FlightResultsListProps } from "../../Types/FlightDetailsType";

export default function FlightResultList({
  flightsDetails,
  visibleCount,
  showMoreResults,
}: FlightResultsListProps) {
  console.log(flightsDetails);
  const [sortOrder, setSortOrder] = useState("lowest");
  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
  };
  const sortedFlights = [...flightsDetails.itineraries].sort((a, b) => {
    const priceA = parseFloat(
      a.price.formatted.replace("$", "").replace(",", "")
    );
    const priceB = parseFloat(
      b.price.formatted.replace("$", "").replace(",", "")
    );
    return sortOrder === "highest" ? priceB - priceA : priceA - priceB;
  });
  console.log(sortedFlights);
  return (
    <Box sx={{ width: "100%" }}>
      {/* Sort Dropdown */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", my: 4 }}>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          size="small"
          sx={{ minWidth: 150 }}>
          <MenuItem value="lowest">Price: Low to High</MenuItem>
          <MenuItem value="highest">Price: High to Low</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          border: "0.1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "3px",
        }}>
        {sortedFlights.slice(0, visibleCount).map((detail, index) => (
          <FlightResultCard key={index} flightData={detail} />
        ))}
      </Box>
      {sortedFlights.length > visibleCount && (
        <Button onClick={showMoreResults} variant="contained" sx={{ mt: 3 }}>
          Show More
        </Button>
      )}
    </Box>
  );
}
