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

  const leg = flightData.legs[0];
  console.log(flightData);
  // Helper function to format time (HH:mm AM/PM)
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  const calculateDuration = (departure: string, arrival: string) => {
    const departureTime = new Date(departure);
    const arrivalTime = new Date(arrival);

    const diffInMinutes = Math.floor(
      (arrivalTime.getTime() - departureTime.getTime()) / (1000 * 60)
    );

    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    return `${hours}h ${minutes}min`;
  };

  return (
    <Card
      sx={{
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
            flexDirection: { xs: "column", md: "row" },
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}>
          {/* Airline Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            <Avatar
              src={flightData.legs[0].carriers.marketing[0].logoUrl}
              alt={flightData.legs[0].carriers.marketing[0].name}
              sx={{ width: 50, height: 50, marginRight: "10px" }}
            />

            {/* Travel Times & Total Duration */}
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginRight: "20px" }}>
                {formatTime(flightData.legs[0].departure)} -{" "}
                {formatTime(flightData.legs[0].arrival)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {calculateDuration(
                  flightData.legs[0].departure,
                  flightData.legs[0].arrival
                )}
              </Typography>
            </Box>
          </Box>
          {/* Stop Count */}
          <Box>
            <Typography variant="body2" color="text.secondary">
              0 Stops
            </Typography>
          </Box>
          {/* Round Type */}
          <Box>
            <Typography variant="body2" color="text.secondary">
              Round Trip
            </Typography>
          </Box>
          {/* Price & Expand Button */}
          <Box
            sx={{ textAlign: "right", display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "green" }}>
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
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
                {formatTime(leg.departure)} {leg.origin.name} Airport (
                {leg.origin.displayCode})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Travel time: {calculateDuration(leg.departure, leg.arrival)}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {formatTime(leg.arrival)} {leg.destination.name} Airport (
                {leg.destination.displayCode})
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
}
