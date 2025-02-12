import { Select, InputAdornment, MenuItem, Box } from "@mui/material";
import MultiArrowIcon from "../../../assets/Icons/MultiArrowIcon";
import OneWayIcon from "../../../assets/Icons/OneWayIcon";
import MultiCityIcon from "../../../assets/Icons/MultiCityIcon";
import TrueIcon from "../../../assets/Icons/TrueIcon";
import { TripType } from "../../../Types/TripType";

import { useState } from "react";

export default function TripTypeSelect() {
  const [tripType, setTripType] = useState<TripType>("Round Trip");
  const handleChange = (event: any) => {
    const selectedValue: TripType = event.target.value;
    setTripType(selectedValue);
  };

  const handleIconType = () => {
    switch (tripType) {
      case "Round Trip":
        return <MultiArrowIcon />;
      case "One Way":
        return <OneWayIcon />;
      case "Multi-city":
        return <MultiCityIcon />;
      default:
        return <MultiArrowIcon />;
    }
  };
  return (
    <Select
      labelId="trip-type-select-label"
      variant="standard"
      id="trip-type-select"
      onChange={handleChange}
      value={tripType}
      sx={{
        "&:before": { display: "none" },
        "&:hover:before": { display: "none" },
        "&.Mui-focused:before": { display: "none" },
        ".css-f7bkku": { display: "none" },
        "&.Mui-focused": {
          borderBottom: "none !important",
          boxShadow: "none",
        },
        "&:hover": {
          borderBottom: "none",
        },
      }}
      startAdornment={
        <InputAdornment position="start" sx={{ "& svg": { fontSize: 30 } }}>
          {handleIconType()}
        </InputAdornment>
      }>
      {["Round Trip", "One Way", "Multi-city"].map((option) => (
        <MenuItem key={option} value={option}>
          <Box display="flex" alignItems="center" gap={1.5} width="100%">
            <Box width="24px" display="flex" justifyContent="center">
              {tripType === option && <TrueIcon />}
            </Box>
            <Box flexGrow={1}>{option}</Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
