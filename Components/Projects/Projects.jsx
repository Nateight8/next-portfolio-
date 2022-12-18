import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import Project from "./Project";

function Projects() {
  const img = "/4.png";
  const imgOne = "/2.jpg";
  const imgTwo = "/5.png";

  return (
    <section>
      <Container maxWidth="xl" sx={{ paddingY: "2rem" }}>
        <div
          className="header"
          style={{
            position: "sticky",
            top: "48vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <Header />
        </div>
        {/* <HeaderTwo /> */}
        <Project src={img} dataBg={"#bcb8ad"} dataTxt={"#032f35"} />
        <Project src={imgOne} dataBg={"#536fae"} dataTxt={"#eacbd1"} />
        <Project src={imgTwo} dataBg={"#eacbd1"} dataTxt={"#536fae"} />
        {/* <Project src={imgTwo} dataBg={"#121212"} /> */}
        <div
          data-bgcolor="#121212"
          data-text="#fff"
          className="section"
          style={{ height: "60vh", width: "100%", background: "" }}
        ></div>
      </Container>
    </section>
  );
}

export default Projects;
