import { Box, Button, FormControl } from "@mui/material";
import TripTypeSelect from "./Fields/TripTypeSelect";
import PassengerNumber from "./Fields/PassengerNumber";
import ClassTypeSelect from "./Fields/ClassTypeSelect";
import LocationSelect from "./Fields/LocationSelect";
import DataPickerField from "./Fields/DataPicker";
import ExploreIcon from "../../assets/Icons/ExploreIcon";

export default function SearchBar() {
  return (
    <>
      <Box
        marginTop={10}
        sx={{ padding: "10px", position: "relative" }}
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
              alignItems: "center",
              marginBottom: "30px",
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
                width: "100%",
              }}>
              <LocationSelect />
            </Box>
            <Box sx={{ flexBasis: { xs: "50%", lg: "100%" } }}>
              <DataPickerField />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              right: "50%",
              bottom: "-30px",
              transform: "translateX(50%)",
            }}>
            <Button
              sx={{
                background: "#1A73E8",
                borderRadius: "24px",
                height: "40px",
                fontWeight: "600",
                fontSize: ".720rem",
                width: "max-content",
                color: "white",
              }}>
              <ExploreIcon />
              Explore
            </Button>
          </Box>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: "50px" }}></Box>
    </>
  );
}
