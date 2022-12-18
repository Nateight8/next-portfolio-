import { Box, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Typography
      fontFamily="thunder"
      variant="h2"
      sx={{
        paddingBlock: "0.2em",
        textAlign: "center",
      }}
    >
      Case Studies
    </Typography>
  );
}
