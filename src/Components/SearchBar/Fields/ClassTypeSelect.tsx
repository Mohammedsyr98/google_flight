import React from "react";
import { SearchBarFieldProps } from "../../../Types/SearchBarFieldProps";
import { MenuItem, Select } from "@mui/material";

export default function ClassTypeSelect({
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
      <MenuItem value={10}>Economy</MenuItem>
      <MenuItem value={20}>Bunsiness economy</MenuItem>
      <MenuItem value={30}>Business</MenuItem>
      <MenuItem value={40}>First</MenuItem>
    </Select>
  );
}
