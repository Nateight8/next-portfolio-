import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

function HeaderTwo() {
  return (
    <Grid container sx={{ position: "sticky", top: 0 }}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            width: "90%",
            paddingBlock: "0.2em",
            textAlign: "Center",
          }}
        >
          Case Studies
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          justifyContent="center"
          alignItem="center"
          sx={{ height: "100%", background: "" }}
        >
          <Typography
            variant="body1"
            sx={{
              paddingBottom: { xs: "3em", sm: "0.5rem" },
              opacity: 0.7,
            }}
          >
            {/* "Creativity is intelligence having fun." - Albert Einstein. */}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default HeaderTwo;
