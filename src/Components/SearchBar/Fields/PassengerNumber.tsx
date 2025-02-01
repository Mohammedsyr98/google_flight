import { MenuItem, Select } from "@mui/material";
import React from "react";
import MultiArrowIcon from "../../../assets/Icons/MultiArrowIcon";
import { SearchBarFieldProps } from "../../../Types/SearchBarFieldProps";

export default function PassengerNumber({
  value,
  onChange,
}: SearchBarFieldProps) {
  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      variant="standard"
      sx={{
        "&:before": { display: "none" },
        "&:hover:before": { display: "none" },
        "&.Mui-focused:before": { display: "none" },
      }}
      defaultValue={10}>
      <MenuItem value={10}>
        <MultiArrowIcon /> Round Trip
      </MenuItem>
      <MenuItem value={20}>One Way</MenuItem>
      <MenuItem value={30}>Multi-city</MenuItem>
    </Select>
  );
}
