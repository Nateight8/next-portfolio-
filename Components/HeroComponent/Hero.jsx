import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Hero() {
  return (
    <section
      className="profile"
      style={{ background: "", height: "", width: "100%" }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ padding: { sm: "1em" } }}>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "4.7rem", sm: "6rem", md: "8rem" },
                      paddingBlock: ".2em",
                    }}
                  >
                    DIGITIZED IDEAS
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Stack
                    justifyContent="end"
                    sx={{ height: "100%", background: "" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        paddingBottom: { xs: "3em" },
                        opacity: 0.7,
                      }}
                    >
                      I am a Front End Developer with a background in User
                      Interface Design and a strong understanding of User
                      Experience...
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Button
                size="large"
                variant="contained"
                sx={{
                  borderRadius: "2rem",
                  fontSize: "1.5rem",
                  textTransform: "capitalize",
                  width: "100%",
                  marginBlock: "0.8em",
                  fontWeight: 300,
                  color: "black",
                  display: { sm: "none" },
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: { xs: "2em" },
                backgroundColor: "red",
                height: "60vh",
                position: "relative",
                // borderRadius: "2rem 0",
                // margin: { sm: "1em" },
              }}
            >
              <Image
                src="/3.jpg"
                alt=""
                fill
                objectFit="cover"
                objectPosition="center 10%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Hero;
