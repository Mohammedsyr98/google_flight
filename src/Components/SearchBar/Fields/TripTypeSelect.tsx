import React from "react";
import { SearchBarFieldProps } from "../../../Types/SearchBarFieldProps";
import { Select, InputAdornment, MenuItem } from "@mui/material";
import MultiArrowIcon from "../../../assets/Icons/MultiArrowIcon";

export default function TripTypeSelect({
  value,
  onChange,
}: SearchBarFieldProps) {
  return (
    <Select
      labelId="demo-simple-select-standard-label"
      variant="standard"
      id="demo-simple-select-standard"
      sx={{
        "&:before": { display: "none" },
        "&:hover:before": { display: "none" },
        "&.Mui-focused:before": { display: "none" },
      }}
      startAdornment={
        <InputAdornment position="start" sx={{ "& svg": { fontSize: 30 } }}>
          <MultiArrowIcon />
        </InputAdornment>
      }
      defaultValue={10}>
      <MenuItem value={10}>Round Trip</MenuItem>
      <MenuItem value={20}>One Way</MenuItem>
      <MenuItem value={30}>Multi-city</MenuItem>
    </Select>
  );
}
