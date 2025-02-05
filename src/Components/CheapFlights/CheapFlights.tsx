import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import map from "../../assets/staticmap.png";
import InfoIcon from "../../assets/Icons/InfoIcon";

export default function CheapFlights() {
  return (
    <Stack>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "12px",
        }}>
        <Typography
          fontSize={18}
          fontWeight={600}
          sx={{ opacity: 0.8, marginBottom: "20px" }}>
          Find cheap flights from your country to anywhere <InfoIcon />
        </Typography>
        <Box
          component="img"
          style={{ width: "100%", height: "100%", marginTop: "10px" }}
          src={map}
        />
      </Box>
    </Stack>
  );
}
