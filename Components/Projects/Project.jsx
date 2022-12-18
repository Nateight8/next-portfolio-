import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

function Project({ src, dataBg, dataTxt }) {
  const customBtn = {
    borderRadius: "2em",
    color: "white",
    border: "1px solid whitesmoke",
    textTransform: "capitalize",
    "&:hover": {
      borderRadius: "2em",
      color: "whitesmoke",
      border: "1px solid whitesmoke",
      textTransform: "capitalize",
    },
  };

  return (
    <div className="section" data-bgcolor={dataBg} data-text={dataTxt}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100vh" }}
      >
        <Container
          maxWidth="sm"
          sx={{
            marginTop: "2em",
            backgroundColor: "black",
            height: { xs: "70vh", sm: "55vh" },
            borderRadius: "2em",
            padding: "1em",
            position: "relative",
          }}
        >
          <Image
            alt=""
            src={src}
            fill
            style={{ borderRadius: "2em", objectFit: "cover" }}
          />

          <Stack
            justifyContent="space-between"
            direction="row"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5em",
            }}
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                ...customBtn,
              }}
            >
              visit website
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                ...customBtn,
              }}
            >
              Check Code
            </Button>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}

export default Project;
