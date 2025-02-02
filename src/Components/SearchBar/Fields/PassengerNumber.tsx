import React, { useState } from "react";
import { SearchBarFieldProps } from "../../../Types/SearchBarFieldProps";
import { Box, Typography, IconButton, Popover, Button } from "@mui/material";
import PassengerIcon from "../../../assets/Icons/PassengerIcon";
import DropDownIcon from "../../../assets/Icons/DropDownIcon";

export default function PassengerNumber({
  value,
  onChange,
}: SearchBarFieldProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
  });

  const [borderAnimating, setBorderAnimating] = useState(false);

  // Calculate total passengers
  const totalPassengers =
    passengers.adults +
    passengers.children +
    passengers.infantsSeat +
    passengers.infantsLap;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setBorderAnimating(true);
    setTimeout(() => {
      setBorderAnimating(false);
    }, 1000);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (type: keyof typeof passengers, increment: boolean) => {
    setPassengers((prev) => {
      const currentValue = prev[type];

      if (type === "adults" && !increment && currentValue <= 1) {
        return prev;
      }

      return {
        ...prev,
        [type]: Math.max(0, currentValue + (increment ? 1 : -1)),
      };
    });
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "8px 12px",

          position: "relative",
          cursor: "pointer",
          "&:before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: "0%",
            height: "2px",
            backgroundColor: "blue",
            transition: "width 0.5s ease, left 0.5s ease",
            ...(borderAnimating && {
              width: "100%",
              left: "0%",
            }),
          },
        }}>
        <PassengerIcon />
        <Typography>{totalPassengers}</Typography>
        <Box
          sx={{
            width: "10px",
            marginBottom: "3px",
          }}>
          <DropDownIcon />
        </Box>
      </Box>

      {/* Popover for detailed passenger selection */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Box sx={{ padding: 2, minWidth: 250 }}>
          {[
            { label: "Adults", key: "adults" },
            { label: "Children (Aged 2-11)", key: "children" },
            { label: "Infants (In seat)", key: "infantsSeat" },
            { label: "Infants (On lap)", key: "infantsLap" },
          ].map(({ label, key }) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                mb: 1,
              }}>
              <Typography>{label}</Typography>
              <Box>
                <IconButton
                  sx={{
                    background:
                      passengers[key as keyof typeof passengers] === 0 ||
                      (key === "adults" &&
                        passengers[key as keyof typeof passengers] <= 1)
                        ? "#E7E8E8"
                        : "#E0EBFD",
                    color:
                      passengers[key as keyof typeof passengers] === 0 ||
                      (key === "adults" &&
                        passengers[key as keyof typeof passengers] <= 1)
                        ? "#B0B0B0"
                        : "#0160F0",
                    width: "35px",
                    height: "35px",
                    borderRadius: "0px",
                  }}
                  onClick={() =>
                    handleChange(key as keyof typeof passengers, false)
                  }
                  disabled={
                    passengers[key as keyof typeof passengers] === 0 ||
                    (key === "adults" &&
                      passengers[key as keyof typeof passengers] <= 1)
                  }>
                  -
                </IconButton>
                <Typography component="span" sx={{ mx: 1 }}>
                  {passengers[key as keyof typeof passengers]}
                </Typography>
                <IconButton
                  sx={{
                    background:
                      passengers[key as keyof typeof passengers] >= 0
                        ? "#E0EBFD"
                        : "#E7E8E8",
                    color:
                      passengers[key as keyof typeof passengers] >= 0
                        ? "#0160F0"
                        : "#5f6368",
                    width: "35px",
                    height: "35px",
                    borderRadius: "0px",
                  }}
                  onClick={() =>
                    handleChange(key as keyof typeof passengers, true)
                  }>
                  +
                </IconButton>
              </Box>
            </Box>
          ))}
          <Button
            fullWidth
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 1 }}>
            Done
          </Button>
        </Box>
      </Popover>
    </>
  );
}
