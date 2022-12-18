import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Services() {
  return (
    <section style={{ width: "100%", background: "" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            background: "",
            paddingTop: "2rem",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "3.2rem" }}>
            My Arsenals
          </Typography>
        </Box>
      </Container>
    </section>
  );
}

export default Services;
