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
  const [whereFromValue, setWhereFromValue] = useState<string | null>("");
  const [whereToValue, setWhereToValue] = useState<string | null>("");

  const swapValues = () => {
    setWhereFromValue(whereToValue);
    setWhereToValue(whereFromValue);
  };
  return (
    <>
      {/* where from */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
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
            zIndex: "5",
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  padding: "14px 8px 14px 8px",
                },
                "& button": {
                  display: "none",
                },
                display: "flex",
                alignItems: "center",
                zIndex: "-1",
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
          sx={{
            height: "100%",
            width: "100%",
            zIndex: "-1",
            overflow: "hidden",
            position: "absolute",
            top: "0",
          }}>
          <Box
            className="absoluteBox"
            sx={{
              width: "35px",
              height: "35px",
              position: "absolute",
              borderRadius: "100%",
              right: "0",
              transform: "translateX(55%)",
              border: "1px solid #C4C4C4",
              top: "23%",
              zIndex: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
            }}></Box>
        </Box>
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
        <ButtonBase onClick={swapValues}>
          <MultiArrowIcon />
        </ButtonBase>
      </Box>
      {/* where to */}
      <Box
        sx={{
          width: "100%",
          position: "relative",

          "&:hover .absoluteBox": {
            border: "1px solid #000",
          },
          "&:focus-within .absoluteBox": {
            border: "2px solid #1976D2",
          },
        }}>
        {" "}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            zIndex: "-1",
            overflow: "hidden",
            position: "absolute",

            top: "0",
          }}>
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
              zIndex: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}></Box>
        </Box>
        <Autocomplete
          disablePortal
          value={whereToValue}
          options={["test1", "test2", "test3"]}
          onChange={(e, value) => setWhereToValue(value)}
          sx={{
            width: "100%",
            "& .MuiAutocomplete-endAdornment": {
              visibility: "hidden",
            },
            zIndex: "5",
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  padding: "14px 8px 14px 8px",
                },

                "& button": {
                  display: "none",
                },
                zIndex: "-2",
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
