import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          paddingY: "2rem",
          background: "yellow",
          height: "70vh",
          borderRadius: "0 0 2.5rem 2.5rem",
          marginBottom: "10rem",
        }}
      ></Box>
    </Container>
  );
}

export default Contact;
