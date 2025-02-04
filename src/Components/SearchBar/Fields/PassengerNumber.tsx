import React, { useState } from "react";
import { Box, Typography, IconButton, Popover, Button } from "@mui/material";
import PassengerIcon from "../../../assets/Icons/PassengerIcon";
import DropDownIcon from "../../../assets/Icons/DropDownIcon";
import { SearchParams, useSearch } from "../../../Context/SearchContext";

export default function PassengerNumber() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { searchParams, setSearchParams } = useSearch();

  const [borderAnimating, setBorderAnimating] = useState(false);

  // Calculate total passengers
  const totalPassengers =
    (searchParams.adults || 0) +
    (searchParams.children || 0) +
    (searchParams.infants || 0);

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

  const handleChange = (
    type: keyof typeof searchParams,
    increment: boolean
  ) => {
    const currentValue = searchParams[type];

    if (currentValue === undefined) {
      return; // No action if value is undefined
    }

    if (type === "adults" && !increment && Number(currentValue) <= 1) {
      return; // Prevent reducing adults below 1
    }

    setSearchParams({
      ...searchParams,
      [type]: Math.max(0, Number(currentValue) + (increment ? 1 : -1)),
    });
  };

  // Helper function for determining background and color
  const getButtonStyles = (value: number, isDisabled: boolean) => {
    const backgroundColor = isDisabled ? "#E7E8E8" : "#E0EBFD";
    const color = isDisabled ? "#B0B0B0" : "#0160F0";
    return { background: backgroundColor, color: color };
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
        <Box sx={{ width: "10px", marginBottom: "3px" }}>
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
            { label: "Infants", key: "infants" },
          ].map(({ label, key }) => {
            const currentValue = searchParams[key as keyof typeof searchParams];
            const isDisabledMinus =
              currentValue === 0 ||
              (key === "adults" && Number(currentValue) <= 1);
            const isDisabledPlus =
              currentValue === undefined || Number(currentValue) < 0;

            return (
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
                      ...getButtonStyles(
                        Number(currentValue) || 0,
                        isDisabledMinus
                      ),
                      width: "35px",
                      height: "35px",
                      borderRadius: "0px",
                    }}
                    onClick={() =>
                      handleChange(key as keyof typeof searchParams, false)
                    }
                    disabled={isDisabledMinus}>
                    -
                  </IconButton>
                  <Typography component="span" sx={{ mx: 1 }}>
                    {currentValue}
                  </Typography>
                  <IconButton
                    sx={{
                      ...getButtonStyles(
                        Number(currentValue) || 0,
                        isDisabledPlus
                      ),
                      width: "35px",
                      height: "35px",
                      borderRadius: "0px",
                    }}
                    onClick={() =>
                      handleChange(key as keyof typeof searchParams, true)
                    }
                    disabled={isDisabledPlus}>
                    +
                  </IconButton>
                </Box>
              </Box>
            );
          })}

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
