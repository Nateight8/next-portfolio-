import { Box, Container } from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <Container maxWidth="xl" sx={{ position: "", top: 0 }}>
      <Box
        sx={{
          paddingY: "2rem",
          background: "yellow",
          height: "10vh",
          borderRadius: "2.5rem 2.5rem 0 0",
          marginBottom: "10rem",
        }}
      ></Box>
    </Container>
  );
}

export default NavBar;
