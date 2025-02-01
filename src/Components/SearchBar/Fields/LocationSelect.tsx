import {
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  ButtonBase,
} from "@mui/material";
import React, { useState } from "react";
import LocationIcon from "../../../assets/Icons/LocationIcon";
import MultiArrowIcon from "../../../assets/Icons/MultiArrowIcon";
import WhereFromIcon from "../../../assets/Icons/WhereFromIcon";

export default function LocationSelect() {
  const [whereFromValue, setWhereFromValue] = useState();
  return (
    <>
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
                  <InputAdornment sx={{ paddingLeft: "8px" }} position="start">
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
            right: "0",
            transform: "translateX(55%)",
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
          // right: "48%",
          transform: "translateX(50%)",
          right: "50%",
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
            left: "0",
            transform: "translateX(-55%)",
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
                  <InputAdornment sx={{ paddingLeft: "8px" }} position="start">
                    <LocationIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
    </>
  );
}
