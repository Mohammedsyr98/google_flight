import {
  Autocomplete,
  Box,
  Button,
  ButtonBase,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import MultiArrowIcon from "../assets/Icons/MultiArrowIcon";
import WhereFromIcon from "../assets/Icons/WhereFromIcon";
import LocationIcon from "../assets/Icons/LocationIcon";
import { useState } from "react";

export default function SearchBar() {
  const [whereFromValue, setWhereFromValue] = useState<string>("");
  const [whereToValue, setWhereToValue] = useState<string>("");
  console.log(whereFromValue);
  return (
    <Box
      marginTop={10}
      sx={{ padding: "10px" }}
      boxShadow={
        "0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)"
      }
      borderRadius={8}
      width={{
        xs: "100%",
        sm: "100%",
        md: "80%",
        lg: "82%",
      }}>
      {/* select fields */}
      <Box
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          height: "48px",
        }}>
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
      </Box>

      {/* input fields */}

      <FormControl fullWidth>
        <Box
          sx={{
            display: "flex",
            padding: "0 10px 10px",
            flexDirection: { xs: "column", md: "row" },
            gap: "16px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexBasis: { xs: "50%", lg: "100%" },

              gap: "8px",
              position: "relative",
            }}>
            {/* where from */}
            <Box
              sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                "&:hover .absoluteBox ": {
                  border: "1px solid #000",
                },
                "&:focus-within .absoluteBox": {
                  border: "2px solid #1976D2",
                },
              }}>
              {" "}
              <Autocomplete
                disablePortal
                value={whereFromValue}
                options={["test1", "test2", "test3"]}
                onChange={(e, value) => setWhereFromValue(value)}
                sx={{
                  width: "100%",
                  "& .MuiAutocomplete-endAdornment": {
                    visibility: "hidden",
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: "14px 8px 14px 8px",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    {...params}
                    placeholder="Where from?"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment
                          sx={{ paddingLeft: "8px" }}
                          position="start">
                          <WhereFromIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Box
                className="absoluteBox"
                sx={{
                  width: "35px",
                  height: "35px",
                  position: "absolute",
                  background: "white",
                  borderRadius: "100%",
                  right: "-8.3%",

                  border: "1px solid #C4C4C4",
                  top: "23%",
                  zIndex: "2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}></Box>
            </Box>
            {/* swap icon */}
            <Box
              sx={{
                position: "absolute",
                right: "48%",
                top: "36%",
                zIndex: "3",
              }}>
              <ButtonBase>
                <MultiArrowIcon />
              </ButtonBase>
            </Box>
            {/* where to */}
            <Box
              sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                "&:hover .absoluteBox ": {
                  border: "1px solid #000",
                },
                "&:focus-within .absoluteBox": {
                  border: "2px solid #1976D2",
                },
              }}>
              {" "}
              <Box
                className="absoluteBox"
                sx={{
                  width: "35px",
                  height: "35px",
                  position: "absolute",
                  background: "white",
                  borderRadius: "100%",
                  left: "-8.3%",
                  border: "1px solid #C4C4C4",
                  top: "23%",
                  zIndex: "2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}></Box>
              <Autocomplete
                disablePortal
                options={["test1", "test2", "test3"]}
                sx={{
                  width: "100%",
                  "& .MuiAutocomplete-endAdornment": {
                    visibility: "hidden",
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: "14px 8px 14px 8px",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    {...params}
                    placeholder="Where to?"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment
                          sx={{ paddingLeft: "8px" }}
                          position="start">
                          <LocationIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
          </Box>
          <Box
            sx={{ background: "pink", flexBasis: { xs: "50%", lg: "100%" } }}>
            data picker
          </Box>
        </Box>
      </FormControl>
      <Box sx={{ marginTop: "30px" }}></Box>
    </Box>
  );
}
