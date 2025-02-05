import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import CalenderIcon2 from "../../assets/Icons/CalenderIcon2";
import AnalyticIcon from "../../assets/Icons/AnalyticIcon";
import NotificationIcon from "../../assets/Icons/NotificationIcon";
import grid from "../../assets/dates_benefits_light.svg";

export default function BestDeals() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const date = [
    {
      icon: <CalenderIcon2 />,
      title: "Find the cheapest days to fly",
      description:
        "The Date grid and Price graph make it easy to see the best flight deals.",
    },
    {
      icon: <AnalyticIcon />,
      title: "See the whole picture with price insights",
      description:
        "Price history and trend data show you when to book to get the best price on your flight.",
    },
    {
      icon: <NotificationIcon />,
      title: "Track prices for a trip",
      description:
        "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.",
    },
  ];

  return (
    <Stack width="100%" spacing={3}>
      <Box sx={{ width: "100%" }}>
        <Typography fontSize={"18px"} fontWeight={600} sx={{ opacity: "0.8" }}>
          Useful tools to help you find the best deals
        </Typography>
      </Box>

      <Stack
        flexDirection={isSmallScreen ? "column" : "row"}
        width="100%"
        gap={2}>
        {/* Left Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: isSmallScreen ? "100%" : "40%",
          }}>
          {date.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#F3F7FE",
                height: "110px",
                display: "flex",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #d2e3fc",
                alignItems: "center",
              }}>
              {item.icon}
              <Box sx={{ marginLeft: "12px", flex: 1 }}>
                <Typography
                  fontWeight={600}
                  fontSize="14px"
                  sx={{ opacity: 0.8 }}>
                  {item.title}
                </Typography>
                <Typography fontWeight={400} fontSize="14px" marginTop="5px">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "60%",
            marginLeft: isSmallScreen ? 0 : "50px",
            marginTop: isSmallScreen ? 0 : "50px",
          }}>
          <Typography
            fontSize="18px"
            fontWeight={600}
            sx={{ opacity: 0.8, marginBottom: "15px" }}>
            Insightful tools help you choose your trip dates
          </Typography>
          <Typography fontSize="14px">
            If your travel plans are flexible, use the form above to start
            searching for a specific trip. Then, play around with the{" "}
            <Typography
              component="span"
              fontSize="14px"
              fontWeight={600}
              sx={{ opacity: 0.8 }}>
              Date grid
            </Typography>{" "}
            and{" "}
            <Typography
              component="span"
              fontSize="14px"
              fontWeight={600}
              sx={{ opacity: 0.8 }}>
              Price graph
            </Typography>{" "}
            options on the Search page to find the cheapest days to get to your
            destination – and back again for round trips.
          </Typography>
          <Box
            sx={{ width: isSmallScreen ? "100%" : "72%", marginTop: "15px" }}
            component="img"
            src={grid}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
