import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Collapse,
} from "@mui/material";
import CircleIcon from "../../assets/Icons/CircleIcon";
import DashedLine from "../../assets/Icons/DashedLine";
import DropDownIcon2 from "../../assets/Icons/DropDownIcon2";
import { FlightResultCardProps } from "../../Types/FlightDetailsType";

export default function FlightResultCard({
  flightData,
}: FlightResultCardProps) {
  const [open, setOpen] = useState(false);

  // Helper function to format time (HH:mm AM/PM)
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: "0px",
        borderBottom: "0.1px solid rgba(0, 0, 0, 0.12)",
      }}>
      <CardContent>
        {/* Default View: Summary */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}>
          {/* Airline Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={flightData.legs[0].carriers.marketing[0].logoUrl}
              alt={flightData.legs[0].carriers.marketing[0].name}
              sx={{ width: 50, height: 50, marginRight: "10px" }}
            />

            {/* Travel Times & Total Duration */}
            <Box sx={{ textAlign: "center", display: "flex" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginRight: "20px" }}>
                {formatTime(flightData.legs[0].departure)} -{" "}
                {formatTime(flightData.legs[0].arrival)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.floor(flightData.legs[1].durationInMinutes / 60)} hr{" "}
                {flightData.legs[0].durationInMinutes % 60} min
              </Typography>
            </Box>
          </Box>

          {/* Price & Expand Button */}
          <Box
            sx={{ textAlign: "right", display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {flightData.price.formatted}
            </Typography>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}>
              <DropDownIcon2 />
            </IconButton>
          </Box>
        </Box>

        {/* Expanded View: More Details */}
        <Collapse in={open}>
          <Divider sx={{ my: 1 }} />
          {flightData.legs.map((leg, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {/* Timeline Icons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                }}>
                <CircleIcon />
                <DashedLine />
                <CircleIcon />
              </Box>

              {/* Flight Details */}
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {formatTime(leg.departure)} {leg.origin.name} Aiport (
                  {leg.origin.displayCode})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Travel time: {Math.floor(leg.durationInMinutes / 60)} hr{" "}
                  {leg.durationInMinutes % 60} min
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {formatTime(leg.arrival)} {leg.destination.name} Aiport (
                  {leg.destination.displayCode})
                </Typography>
              </Box>
            </Box>
          ))}
        </Collapse>
      </CardContent>
    </Card>
  );
}
