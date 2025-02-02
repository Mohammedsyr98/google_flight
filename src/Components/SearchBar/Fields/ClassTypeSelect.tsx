import React, { useState } from "react";
import { SearchBarFieldProps } from "../../../Types/SearchBarFieldProps";
import { Box, MenuItem, Select } from "@mui/material";
import { ClassType } from "../../../Types/ClassType";
import TrueIcon from "../../../assets/Icons/TrueIcon";

export default function ClassTypeSelect({
  value,
  onChange,
}: SearchBarFieldProps) {
  const [classType, setClassType] = useState<ClassType>("Economy");

  const handleChange = (event: any) => {
    const selectedValue: ClassType = event.target.value;
    setClassType(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };
  return (
    <Select
      labelId="class-type-select-standard-label"
      id="class-type-select-standard"
      variant="standard"
      onChange={handleChange}
      sx={{
        "&:before": { display: "none" },
        "&:hover:before": { display: "none" },
        "&.Mui-focused:before": { display: "none" },
        "& .css-f7bkku": { display: "none" },
      }}
      defaultValue={"Economy"}>
      {["Economy", "Premium economy", "Business", "first"].map((option) => (
        <MenuItem key={option} value={option}>
          <Box display="flex" alignItems="center" gap={1.5} width="100%">
            <Box width="24px" display="flex" justifyContent="center">
              {classType === option && <TrueIcon />}
            </Box>
            <Box flexGrow={1}>{option}</Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
