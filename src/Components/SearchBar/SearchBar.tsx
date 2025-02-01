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
import MultiArrowIcon from "../../assets/Icons/MultiArrowIcon";
import WhereFromIcon from "../../assets/Icons/WhereFromIcon";
import LocationIcon from "../../assets/Icons/LocationIcon";
import { useState } from "react";
import TripTypeSelect from "./Fields/TripTypeSelect";
import PassengerNumber from "./Fields/PassengerNumber";
import ClassTypeSelect from "./Fields/ClassTypeSelect";
import LocationSelect from "./Fields/LocationSelect";

export default function SearchBar() {
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
        <TripTypeSelect />
        <PassengerNumber />
        <ClassTypeSelect />
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
            <LocationSelect />
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
