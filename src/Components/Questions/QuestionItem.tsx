import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DropDownIcon2 from "../../assets/Icons/DropDownIcon2";
import { QuestionItemProps } from "../../Types/QuestionType";

export default function QuestionItem({ question, answer }: QuestionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: "100%",

          borderBottom: "1px solid #ccc",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}>
          <Typography>{question}</Typography>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}>
            <DropDownIcon2 />
          </IconButton>
        </Box>

        {/* Collapsible Content */}
        <Collapse in={open}>
          <Typography fontSize={"15px"} sx={{ mt: 1, mb: 1 }}>
            {answer}
          </Typography>
        </Collapse>
      </Box>
    </>
  );
}
