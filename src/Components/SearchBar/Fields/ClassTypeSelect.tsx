import { Box, MenuItem, Select } from "@mui/material";
import { ClassType } from "../../../Types/ClassType";
import TrueIcon from "../../../assets/Icons/TrueIcon";
import { useSearch } from "../../../Context/SearchContext";

export default function ClassTypeSelect() {
  const { searchParams, setSearchParams } = useSearch();

  const handleChange = (event: any) => {
    const selectedValue: ClassType = event.target.value;
    setSearchParams({ ...searchParams, cabinClass: selectedValue });
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
              {searchParams.cabinClass === option && <TrueIcon />}
            </Box>
            <Box flexGrow={1}>{option}</Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
