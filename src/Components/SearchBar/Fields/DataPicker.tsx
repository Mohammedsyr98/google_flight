import {
  TextField,
  Box,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  LocalizationProvider,
  DateCalendar,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

import { useSearch } from "../../../Context/SearchContext";

export default function DataPickerField() {
  const { searchParams, setSearchParams } = useSearch();
  const [dates, setDates] = useState<{
    departure: Dayjs | null;
    return: Dayjs | null;
  }>({
    departure: dayjs(),
    return: null,
  });
  const [selectingField, setSelectingField] = useState<
    "departure" | "return" | null
  >(null);
  const [open, setOpen] = useState(false);

  // Handle Date Selection
  const handleDateChange = (date: Dayjs | null) => {
    if (selectingField === "departure") {
      setDates({ ...dates, departure: date, return: null });
      setSelectingField("return");
    } else if (
      selectingField === "return" &&
      date?.isAfter(dates.departure, "day")
    ) {
      setDates({ ...dates, return: date });
      setSelectingField(null);
      setOpen(false);
    }
  };

  // Handle Arrow Clicks (Increase/Decrease Date)
  const adjustDate = (
    field: "departure" | "return",
    direction: "prev" | "next"
  ) => {
    if (field === "departure") {
      const newDeparture = dates.departure?.add(
        direction === "next" ? 1 : -1,
        "day"
      );
      setDates({ departure: newDeparture, return: null });
    } else if (field === "return" && dates.return) {
      const newReturn = dates.return.add(direction === "next" ? 1 : -1, "day");
      if (newReturn.isAfter(dates.departure, "day")) {
        setDates({ ...dates, return: newReturn });
      }
    }
  };
  useEffect(() => {
    setSearchParams({
      ...searchParams,
      date: dates.departure?.format("YYYY-MM-DD"),
      returnDate: dates.return?.format("YYYY-MM-DD") || "",
    });
  }, [dates, setSearchParams]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box width="100%" position="relative" sx={{ display: "flex" }}>
        {/* Departure Field */}
        <Box display="flex" alignItems="center">
          <TextField
            placeholder="Departure"
            value={dates.departure ? dates.departure.format("ddd,MMM D") : ""}
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                padding: "1.2px 8px 1.2px 8px",
              },
              "& .css-1e3qgpi-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderRightStyle: "solid",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                },
              "& .css-1ll44ll-MuiOutlinedInput-notchedOutline": {
                borderRightStyle: "none",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              },
              display: "flex",
              alignItems: "center",
              margin: "0",
            }}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ width: "35%" }}>
                  <IconButton
                    onClick={() => adjustDate("departure", "prev")}
                    disabled={!dates.return}>
                    <ArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => adjustDate("departure", "next")}
                    disabled={!dates.return}>
                    <ArrowRightIcon />
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{ paddingLeft: "8px" }} position="start">
                  <CalendarIcon />
                </InputAdornment>
              ),
            }}
            readOnly
            onFocus={() => {
              setSelectingField("departure");
              setOpen(true);
            }}
          />
        </Box>

        {/* Return Field */}
        <Box display="flex" alignItems="center">
          <TextField
            placeholder="Return Date"
            value={dates.return ? dates.return.format("ddd, MMM D") : ""}
            variant="outlined"
            sx={{
              "& .css-1n04w30-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderLeftStyle: "solid",
                  borderTopLeftRadius: "3px",
                  borderBottomLeftRadius: "3px",
                },
              "& .MuiInputBase-root": {
                padding: "1.2px 8px 1.2px 8px",
                outline: "none",
                position: "relative",
              },
              "& .css-1ll44ll-MuiOutlinedInput-notchedOutline": {
                borderLeftStyle: "none",

                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
                "&:focus": {
                  borderLeftStyle: "none",
                  borderTopLeftRadius: "1px",
                  borderBottomLeftRadius: "1px",
                },
              },
              "&:before": {
                content: `""`,
                position: "absolute",
                width: "1px",
                height: "52%",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#0000003b",
                left: "0",
              },

              display: "flex",
              alignItems: "center",
              margin: "0",
            }}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ width: "38%" }}>
                  <IconButton
                    onClick={() => adjustDate("return", "prev")}
                    disabled={!dates.return}>
                    <ArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => adjustDate("return", "next")}
                    disabled={!dates.return}>
                    <ArrowRightIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="normal"
            readOnly
            onFocus={() => {
              setSelectingField("return");
              setOpen(true);
            }}
            disabled={!dates.departure}
          />
        </Box>

        {/* Show Calendar Only When Open */}
        {open && (
          <Paper
            sx={{
              position: "absolute",
              zIndex: 10,
              mt: 1,
              p: 2,
              boxShadow: 3,
              width: "100%",
              backgroundColor: "white",
            }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {selectingField === "departure"
                ? "Select Departure Date"
                : "Select Return Date"}
            </Typography>
            <DateCalendar
              value={
                selectingField === "departure" ? dates.departure : dates.return
              }
              onChange={handleDateChange}
            />
          </Paper>
        )}
      </Box>
    </LocalizationProvider>
  );
}
