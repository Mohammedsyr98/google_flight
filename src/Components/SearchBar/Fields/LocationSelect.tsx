import {
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  ButtonBase,
  ListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationIcon from "../../../assets/Icons/LocationIcon";
import MultiArrowIcon from "../../../assets/Icons/MultiArrowIcon";
import WhereFromIcon from "../../../assets/Icons/WhereFromIcon";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "../../../constants/ApiKey";
import { useDebounce } from "../../../Hooks/useDebounce";
import AirIcon from "../../../assets/Icons/AirIcon";
import { useSearch } from "../../../Context/SearchContext";

export default function LocationSelect() {
  const [whereFromValue, setWhereFromValue] = useState<string | null>("");
  const [whereToValue, setWhereToValue] = useState<string | null>("");
  const debouncedFromValue = useDebounce(whereFromValue, 500);
  const debouncedToValue = useDebounce(whereToValue, 500);
  console.log(whereFromValue);
  const getAirports = async (query: string) => {
    const { data } = await axios.get(
      "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
      {
        params: { query },
        headers: API_KEY,
      }
    );
    return data.data;
  };
  const { data: fromAirports } = useQuery({
    queryKey: ["Airport-data", whereFromValue],
    queryFn: () => getAirports(debouncedFromValue),
    enabled: !!debouncedFromValue,
  });
  const { data: toAirports } = useQuery({
    queryKey: ["Airport-data", whereFromValue],
    queryFn: () => getAirports(debouncedToValue),
    enabled: !!debouncedToValue,
  });
  const { searchParams, setSearchParams } = useSearch();

  useEffect(() => {
    if (debouncedFromValue && debouncedToValue) {
      setSearchParams({
        ...searchParams,
        originSkyId: debouncedFromValue.skyId,
        destinationSkyId: debouncedToValue.skyId,
        originEntityId: debouncedFromValue.entityId,
        destinationEntityId: debouncedToValue.entityId,
      });
    }

    console.log(fromAirports);
  }, [debouncedFromValue, debouncedToValue]);
  const swapValues = () => {
    setWhereFromValue(whereToValue);
    setWhereToValue(whereFromValue);
  };
  console.log(debouncedFromValue);
  const fromAirportsoptions = fromAirports?.map((airport) => ({
    label: `${airport.presentation.title} Airport - ${airport.navigation.relevantHotelParams.localizedName}, ${airport.presentation.subtitle}`,
    skyId: airport.skyId,
    entityId: airport.entityId,
  }));

  const toAirportsoptions = toAirports?.map((airport) => ({
    label: `${airport.presentation.title} Airport - ${airport.navigation.relevantHotelParams.localizedName}, ${airport.presentation.subtitle}`,
    skyId: airport.skyId,
    entityId: airport.entityId,
  }));
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
          onChange={(e, newValue) => setWhereFromValue(newValue)}
          options={fromAirportsoptions || []}
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
              onChange={(e) => setWhereFromValue(e.target.value)}
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
          renderOption={(props, option) => (
            <ListItem {...props} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "25%" }}>
                <AirIcon sx={{ marginRight: "8px" }} />
              </Box>

              {option.label}
            </ListItem>
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
          onChange={(e, newValue) => setWhereToValue(newValue)}
          options={toAirportsoptions || []}
          sx={{
            width: "100%",
            "& .MuiAutocomplete-endAdornment": {
              visibility: "hidden",
            },
            zIndex: "5",
          }}
          renderInput={(params) => (
            <TextField
              onChange={(e) => setWhereToValue(e.target.value)}
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
          renderOption={(props, option) => (
            <ListItem {...props} sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "25%" }}>
                <AirIcon sx={{ marginRight: "8px" }} />
              </Box>

              {option.label}
            </ListItem>
          )}
        />
      </Box>
    </>
  );
}
